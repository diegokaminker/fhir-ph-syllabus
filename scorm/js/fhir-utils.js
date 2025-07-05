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
    createScoreObservation(surname, score, sessionId) {
        const now = new Date().toISOString();
        
        return {
            resourceType: "Observation",
            identifier: [
                {
                    system: "http://hl7fundamentals.com/quiz-scores",
                    value: surname
                }
            ],
            status: "final",
            category: [
                {
                    coding: [
                        {
                            system: "http://terminology.hl7.org/CodeSystem/observation-category",
                            code: "survey",
                            display: "Survey"
                        }
                    ]
                }
            ],
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
                reference: `Patient/${surname}`,
                display: surname
            },
            effectiveDateTime: now,
            issued: now,
            valueQuantity: {
                value: score,
                unit: "percent",
                system: "http://unitsofmeasure.org",
                code: "%"
            },
            component: [
                {
                    code: {
                        coding: [
                            {
                                system: "http://hl7fundamentals.com/quiz-scores",
                                code: "SESSION",
                                display: "Session ID"
                            }
                        ]
                    },
                    valueString: sessionId
                }
            ]
        };
    }

    // Submit score to FHIR server
    async submitScore(surname, score, sessionId) {
        try {
            const observation = this.createScoreObservation(surname, score, sessionId);
            
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