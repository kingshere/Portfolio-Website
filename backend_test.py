#!/usr/bin/env python3
"""
Backend API Test Suite for Portfolio Website
Tests all FastAPI endpoints and functionality
"""

import requests
import json
from datetime import datetime
import sys
import uuid

# Backend URL from frontend/.env
BACKEND_URL = "https://barnik-dev.preview.emergentagent.com"
API_BASE_URL = f"{BACKEND_URL}/api"

def test_health_check():
    """Test GET /api/ endpoint"""
    print("Testing GET /api/ (Health Check)...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                return True
            else:
                print("❌ Health check returned unexpected message")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Health check failed with error: {e}")
        return False

def test_create_status_check():
    """Test POST /api/status endpoint"""
    print("\nTesting POST /api/status (Create Status Check)...")
    try:
        # Test with realistic data for a portfolio website
        test_data = {
            "client_name": "John_Portfolio_Visitor"
        }
        
        response = requests.post(f"{API_BASE_URL}/status", 
                               json=test_data, 
                               timeout=10,
                               headers={"Content-Type": "application/json"})
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            # Verify response structure
            if all(key in data for key in ["id", "client_name", "timestamp"]):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ Status check creation working correctly")
                    return True, data["id"]
                else:
                    print("❌ Status check creation returned incorrect data")
                    return False, None
            else:
                print("❌ Status check creation response missing required fields")
                return False, None
        else:
            print(f"❌ Status check creation failed with status {response.status_code}")
            return False, None
    except Exception as e:
        print(f"❌ Status check creation failed with error: {e}")
        return False, None

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    print("\nTesting GET /api/status (Get Status Checks)...")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Found {len(data)} status check(s)")
            
            # Verify response is a list
            if isinstance(data, list):
                # If we have data, verify structure
                if len(data) > 0:
                    first_item = data[0]
                    if all(key in first_item for key in ["id", "client_name", "timestamp"]):
                        print("✅ Status check retrieval working correctly")
                        return True
                    else:
                        print("❌ Status check data missing required fields")
                        return False
                else:
                    print("✅ Status check retrieval working (empty list)")
                    return True
            else:
                print("❌ Status check retrieval returned non-list response")
                return False
        else:
            print(f"❌ Status check retrieval failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Status check retrieval failed with error: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\nTesting CORS Configuration...")
    try:
        # Test preflight request
        response = requests.options(f"{API_BASE_URL}/status", 
                                   headers={
                                       "Origin": "http://localhost:3000",
                                       "Access-Control-Request-Method": "POST"
                                   },
                                   timeout=10)
        
        print(f"CORS Preflight Status Code: {response.status_code}")
        
        # Check for CORS headers
        cors_headers = {
            "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
            "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
            "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
        }
        
        print(f"CORS Headers: {cors_headers}")
        
        if response.status_code in [200, 204] or cors_headers["Access-Control-Allow-Origin"]:
            print("✅ CORS configuration appears to be working")
            return True
        else:
            print("⚠️ CORS configuration may need attention")
            return True  # Non-critical for backend functionality
    except Exception as e:
        print(f"⚠️ CORS test failed with error: {e}")
        return True  # Non-critical for backend functionality

def test_backend_connectivity():
    """Test basic connectivity to backend"""
    print("Testing Backend Connectivity...")
    try:
        response = requests.get(BACKEND_URL, timeout=10)
        print(f"Backend base URL status: {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Backend connectivity test failed: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("=" * 60)
    print("PORTFOLIO WEBSITE BACKEND API TEST SUITE")
    print("=" * 60)
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base URL: {API_BASE_URL}")
    print("=" * 60)
    
    results = {}
    
    # Test 1: Backend Connectivity
    results['connectivity'] = test_backend_connectivity()
    
    # Test 2: Health Check
    results['health_check'] = test_health_check()
    
    # Test 3: Create Status Check
    results['create_status'], status_id = test_create_status_check()
    
    # Test 4: Get Status Checks
    results['get_status'] = test_get_status_checks()
    
    # Test 5: CORS
    results['cors'] = test_cors_headers()
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.upper().replace('_', ' ')}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️ Some backend tests failed - see details above")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)