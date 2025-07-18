# Assignment #4 - HL7 V2.5 to FHIR Mapping Quiz Summary

## Overview
This quiz tests understanding of HL7 V2.5 to FHIR mapping concepts based on the expert advice provided in Assignment #4.

## Quiz Files
- **Quiz**: `assignment4_hl7v2_fhir_mapping_quiz.gift` - GIFT format quiz for Moodle import

## Quiz Structure
The quiz contains 10 multiple-choice questions covering the six key areas identified by the HL7 expert:

### Expert Advice Areas Covered:

1. **Gender Mapping** (Question 4-1)
   - Proper mapping of HL7 V2.x table 0001 values to FHIR administrative gender codes
   - Understanding the value set differences between standards

2. **Location References** (Question 4-2)
   - Problems with direct mapping of facility codes to Location resources
   - Bundle reference integrity issues

3. **Code Systems and Identifiers** (Questions 4-3, 4-4, 4-10)
   - Correct system URLs for NPI, CVX, and other code systems
   - Proper FHIR terminology structure
   - Critical considerations for code system mapping

4. **Date-Time Formats** (Question 4-5)
   - HL7 V2.x format (YYYYMMDDHHMMSS) to FHIR ISO 8601 conversion
   - Timezone handling and format requirements

5. **Internal Bundle References** (Questions 4-6, 4-9)
   - Using urn:uuid references for internal Bundle resources
   - Purpose and structure of fullUrl fields
   - Proper reference management within Bundles

6. **Data Structure Differences** (Questions 4-7, 4-8)
   - Race/ethnicity as US Core extensions vs. base resource elements
   - Manufacturer information mapping
   - Missing data handling

## Learning Objectives
After completing this quiz, students should be able to:
- Identify common pitfalls in HL7 V2.x to FHIR mapping
- Apply correct system URLs for various code systems
- Understand Bundle reference management
- Handle date-time format conversions properly
- Recognize structural differences between the standards
- Implement proper mapping strategies for complex data elements

## Key Concepts Tested:
- **Terminology Mapping**: Correct system URLs for NPI, CVX, and other code systems
- **Bundle Management**: Internal references using urn:uuid and fullUrl
- **Data Transformation**: Date-time format conversion and value set mapping
- **Resource Structure**: Understanding differences in how data is organized
- **Reference Integrity**: Ensuring proper resource relationships in Bundles

## Usage Instructions
1. Import the GIFT file into Moodle
2. Students should review Assignment #4 materials before taking the quiz
3. The quiz can be used as a formative assessment for mapping concepts
4. Questions test both theoretical understanding and practical application

## Expert Advice Integration:
The quiz directly addresses the six key issues identified by the HL7 expert:
1. Gender mapping problems
2. Location reference issues
3. Code system and identifier problems
4. Date-time format challenges
5. Internal Bundle reference management
6. Missing manufacturer data handling 