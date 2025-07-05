// SCORM 1.2 API Wrapper
var ScormAPI = {
    api: null,
    version: "1.2",
    initialized: false,
    
    // Initialize SCORM API
    init: function() {
        try {
            // Find SCORM API
            this.api = this.findAPI(window);
            if (this.api == null) {
                this.api = this.findAPI(window.parent);
            }
            if (this.api == null) {
                this.api = this.findAPI(window.top);
            }
            
            if (this.api != null) {
                this.api.LMSInitialize("");
                this.initialized = true;
                console.log("SCORM API initialized successfully");
                return true;
            } else {
                console.log("SCORM API not found");
                return false;
            }
        } catch (e) {
            console.log("Error initializing SCORM API: " + e.message);
            return false;
        }
    },
    
    // Find SCORM API in window hierarchy
    findAPI: function(win) {
        var findAPITries = 0;
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
            findAPITries++;
            if (findAPITries > 500) {
                console.log("Error finding API -- too deeply nested.");
                return null;
            }
            win = win.parent;
        }
        return win.API;
    },
    
    // Set lesson status
    setLessonStatus: function(status) {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSSetLessonStatus(status);
                return true;
            } catch (e) {
                console.log("Error setting lesson status: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Set lesson location
    setLessonLocation: function(location) {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSSetLessonLocation(location);
                return true;
            } catch (e) {
                console.log("Error setting lesson location: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Set score
    setScore: function(score) {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSSetScore(score);
                return true;
            } catch (e) {
                console.log("Error setting score: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Get lesson status
    getLessonStatus: function() {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetLessonStatus();
            } catch (e) {
                console.log("Error getting lesson status: " + e.message);
                return "";
            }
        }
        return "";
    },
    
    // Get lesson location
    getLessonLocation: function() {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetLessonLocation();
            } catch (e) {
                console.log("Error getting lesson location: " + e.message);
                return "";
            }
        }
        return "";
    },
    
    // Get score
    getScore: function() {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetScore();
            } catch (e) {
                console.log("Error getting score: " + e.message);
                return "";
            }
        }
        return "";
    },
    
    // Get student name
    getStudentName: function() {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetStudentName();
            } catch (e) {
                console.log("Error getting student name: " + e.message);
                return "";
            }
        }
        return "";
    },
    
    // Get student ID
    getStudentID: function() {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetStudentID();
            } catch (e) {
                console.log("Error getting student ID: " + e.message);
                return "";
            }
        }
        return "";
    },
    
    // Commit data
    commit: function() {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSCommit("");
                return true;
            } catch (e) {
                console.log("Error committing data: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Terminate SCORM API
    terminate: function() {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSFinish("");
                this.initialized = false;
                return true;
            } catch (e) {
                console.log("Error terminating SCORM API: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Set data model element
    setData: function(element, value) {
        if (this.initialized && this.api != null) {
            try {
                this.api.LMSSetData(element, value);
                return true;
            } catch (e) {
                console.log("Error setting data: " + e.message);
                return false;
            }
        }
        return false;
    },
    
    // Get data model element
    getData: function(element) {
        if (this.initialized && this.api != null) {
            try {
                return this.api.LMSGetData(element);
            } catch (e) {
                console.log("Error getting data: " + e.message);
                return "";
            }
        }
        return "";
    }
};

// Auto-initialize SCORM API when page loads
document.addEventListener('DOMContentLoaded', function() {
    ScormAPI.init();
    
    // Set initial lesson status to "incomplete"
    ScormAPI.setLessonStatus("incomplete");
    
    // Set lesson location to current page
    ScormAPI.setLessonLocation(window.location.href);
    
    // Commit initial data
    ScormAPI.commit();
});

// Handle page unload to terminate SCORM API
window.addEventListener('beforeunload', function() {
    ScormAPI.commit();
    ScormAPI.terminate();
});

// Progress tracking functions
function markSectionComplete(sectionId) {
    ScormAPI.setData("cmi.suspend_data", sectionId + "_complete");
    ScormAPI.setLessonStatus("completed");
    ScormAPI.commit();
    
    // Update UI to show completion
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('completed');
        const statusIndicator = section.querySelector('.completion-status');
        if (statusIndicator) {
            statusIndicator.textContent = '✓ Completed';
            statusIndicator.classList.add('text-green-600');
        }
    }
}

function markSectionIncomplete(sectionId) {
    ScormAPI.setData("cmi.suspend_data", sectionId + "_incomplete");
    ScormAPI.setLessonStatus("incomplete");
    ScormAPI.commit();
    
    // Update UI to show incompletion
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('completed');
        const statusIndicator = section.querySelector('.completion-status');
        if (statusIndicator) {
            statusIndicator.textContent = '○ Incomplete';
            statusIndicator.classList.remove('text-green-600');
        }
    }
}

// Video tracking functions
function trackVideoProgress(videoId, currentTime, duration) {
    const progress = (currentTime / duration) * 100;
    ScormAPI.setData("cmi.suspend_data", videoId + "_progress:" + progress);
    ScormAPI.commit();
}

function markVideoComplete(videoId) {
    ScormAPI.setData("cmi.suspend_data", videoId + "_complete");
    ScormAPI.commit();
}

// Quiz/Assessment tracking
function submitQuiz(quizId, score, totalQuestions) {
    const percentage = (score / totalQuestions) * 100;
    ScormAPI.setScore(percentage);
    ScormAPI.setData("cmi.suspend_data", quizId + "_score:" + percentage);
    
    if (percentage >= 80) {
        ScormAPI.setLessonStatus("passed");
    } else {
        ScormAPI.setLessonStatus("failed");
    }
    
    ScormAPI.commit();
}

// Navigation tracking
function trackNavigation(fromPage, toPage) {
    ScormAPI.setLessonLocation(toPage);
    ScormAPI.setData("cmi.suspend_data", "navigation:" + fromPage + "->" + toPage);
    ScormAPI.commit();
} 