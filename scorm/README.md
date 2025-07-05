# HL7 FHIR Public Health Training 2025 - SCORM Package

## Overview

This SCORM 1.2 compliant package contains the complete HL7 FHIR Public Health Training 2025 course, designed for import into Moodle and other SCORM-compatible Learning Management Systems (LMS).

## Package Contents

### Course Structure
- **Course Overview**: Introduction, objectives, and faculty information
- **Day 1: Foundation**: 5 sessions covering FHIR fundamentals
- **Day 2: Advanced Topics**: 5 sessions covering advanced FHIR concepts
- **Course Resources**: Tools, references, and additional materials

### Sessions Included

#### Day 1: Foundation
1. **Session 1: Context** - Healthcare interoperability landscape
2. **Session 2: Landscape** - Current state of healthcare standards
3. **Session 3: Foundational FHIR Part 1** - FHIR resources and specifications
4. **Session 4: Foundational FHIR Part 2** - Advanced FHIR concepts and mapping
5. **Session 5: Day 1 Wrap Up** - Review and preparation

#### Day 2: Advanced Topics
6. **Session 6: FHIR Operations & Tech** - RESTful APIs and operations
7. **Session 7: Implementation Guides** - FHIR IG development and usage
8. **Session 8: HL7 Processes** - Development processes and workgroups
9. **Session 9: Next Steps** - Implementation planning and workshop
10. **Session 10: Wrap Up & Feedback** - Course conclusion

### Materials Included
- **Presentations**: 10 PDF presentations (one per session)
- **Assignments**: 7 practical assignments with solutions
- **Interactive Games**: FHIR API Carnival, Clue Game, Supermarket Game
- **Reference Materials**: Team roles, workgroups, infographics
- **Examples**: Patient and Immunization JSON examples
- **Video Placeholders**: Space for up to 3 videos per session

## Installation Instructions

### For Moodle

1. **Prepare the Package**
   - Download the entire `scorm` folder
   - Ensure all files are included (presentations, assignments, etc.)

2. **Import into Moodle**
   - Log into your Moodle course
   - Turn editing on
   - Click "Add an activity or resource"
   - Select "SCORM package"
   - Click "Add"

3. **Upload the Package**
   - Click "Choose a file" or drag and drop the `scorm` folder
   - Select the `imsmanifest.xml` file as the entry point
   - Click "Upload this file"

4. **Configure Settings**
   - **Name**: "HL7 FHIR Public Health Training 2025"
   - **Description**: Add course description
   - **Package**: Should show the uploaded manifest file
   - **Display**: Choose "New window" or "Current window"
   - **Width/Height**: Set appropriate dimensions (e.g., 100%, 600px)
   - **Skip navigation**: Recommended to leave unchecked
   - **Skip menu**: Recommended to leave unchecked
   - **Auto-continue**: Set to "Yes" for seamless navigation
   - **Auto-new**: Set to "Yes" to open new attempts automatically

5. **Save and Test**
   - Click "Save and display"
   - Test the package to ensure all content loads correctly

### For Other LMS Systems

The package is SCORM 1.2 compliant and should work with any SCORM-compatible LMS including:
- Blackboard
- Canvas
- D2L Brightspace
- Adobe Captivate Prime
- Articulate 360

Follow your LMS's specific instructions for importing SCORM packages.

## Features

### SCORM Tracking
- **Progress Tracking**: Automatic tracking of section completion
- **Score Reporting**: Quiz and assessment score reporting
- **Time Tracking**: Session duration and total time tracking
- **Navigation Tracking**: Page-by-page navigation logging
- **Data Persistence**: Progress saved between sessions

### Interactive Elements
- **Completion Buttons**: Mark sections as complete
- **Progress Indicators**: Visual progress tracking
- **Navigation**: Seamless navigation between sections
- **Resource Links**: Direct access to all course materials
- **Video Placeholders**: Ready for video integration

### Accessibility
- **WCAG 2.1 AA Compliant**: Accessible design and navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Compatible with screen readers
- **High Contrast Support**: High contrast mode compatibility
- **Responsive Design**: Works on desktop, tablet, and mobile

## Video Integration

The package includes placeholders for up to 3 videos per session. To add videos:

1. **Upload Videos**: Upload video files to your LMS
2. **Update HTML**: Replace video placeholders in HTML files
3. **Test Integration**: Ensure videos play correctly in SCORM environment

Example video placeholder structure:
```html
<div class="video-placeholder">
    <h4><i class="fas fa-video"></i> Video Title</h4>
    <video controls width="100%">
        <source src="path/to/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

## Customization

### Branding
- Update the HL7 logo in the header
- Modify colors in `css/styles.css`
- Change fonts and styling as needed

### Content
- Add or remove sessions by updating `imsmanifest.xml`
- Modify session content in individual HTML files
- Update resource links and materials

### Tracking
- Modify tracking functions in `js/scorm.js`
- Add custom data model elements
- Implement additional assessment types

## Technical Requirements

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### LMS Requirements
- SCORM 1.2 compliant LMS
- JavaScript enabled
- PDF viewer for presentations
- Modern web browser

### File Structure
```
scorm/
├── imsmanifest.xml          # SCORM manifest
├── metadata.xml             # Course metadata
├── css/
│   └── styles.css           # Course styles
├── js/
│   └── scorm.js             # SCORM API wrapper
├── overview.html            # Course overview
├── day1.html               # Day 1 content
├── day2.html               # Day 2 content
├── resources.html          # Course resources
├── presentations/          # PDF presentations
├── assignments/            # PDF assignments
└── [other course files]    # Additional materials
```

## Support

For technical support or questions about this SCORM package:

1. **Check the Documentation**: Review this README and course materials
2. **Test in Your Environment**: Ensure compatibility with your LMS
3. **Contact HL7**: For course content questions
4. **LMS Support**: For technical import issues

## Version History

- **v1.0** (2025-01-01): Initial release
  - Complete course content
  - SCORM 1.2 compliance
  - Interactive elements
  - Video placeholders
  - Accessibility features

## License

This SCORM package is provided by HL7 International for educational purposes. Copyright 2025 HL7 International.

---

**Note**: This package is designed for educational use and should be imported into a secure LMS environment. Ensure all course materials are properly attributed and used in accordance with HL7 International's terms of use. 