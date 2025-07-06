// FHIR Utilities for Quiz Score Submission
class FHIRUtils {
    constructor() {
        // Default FHIR server configuration
        this.fhirServer = 'https://ahipdemo.net/server/fhir';
        this.scoreSystem = 'http://hl7fundamentals.com/scores';
        this.scoreCode = 'SCORE';
    }

    // Get URL parameters
    getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Check if surname parameter is present
    hasSurnameParameter() {
        return this.getUrlParameter('surname') !== null;
    }

    // Get surname from URL parameter
    getSurname() {
        return this.getUrlParameter('surname');
    }

    // Create FHIR Observation resource for quiz score
    createScoreObservation(initials, score) {
        const now = new Date().toISOString();
        
        return {
            resourceType: "Observation",
            status: "final",
            code: {
                coding: [
                    {
                        system: this.scoreSystem,
                        code: this.scoreCode,
                        display: "Quiz Score"
                    }
                ],
                text: "Quiz Score"
            },
            subject: {
                display: initials
            },
            effectiveDateTime: now,
            issued: now,
            valueQuantity: {
                value: score,
                unit: "points",
                system: "http://unitsofmeasure.org",
                code: "1"
            }
        };
    }

    // Submit score to FHIR server
    async submitScore(initials, score) {
        try {
            const observation = this.createScoreObservation(initials, score);
            
            const response = await fetch(`${this.fhirServer}/Observation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/fhir+json',
                    'Accept': 'application/fhir+json'
                },
                body: JSON.stringify(observation)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return {
                success: true,
                data: result,
                message: 'Score submitted successfully!'
            };
        } catch (error) {
            console.error('Error submitting score:', error);
            return {
                success: false,
                error: error.message,
                message: 'Failed to submit score. Please try again.'
            };
        }
    }

    // Show submission result message
    showSubmissionMessage(result) {
        const messageDiv = document.getElementById('score-submission-message');
        if (messageDiv) {
            messageDiv.className = result.success ? 'alert alert-success' : 'alert alert-error';
            messageDiv.textContent = result.message;
            messageDiv.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Global FHIR utils instance
const fhirUtils = new FHIRUtils(); 