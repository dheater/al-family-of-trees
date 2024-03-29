# AL Family of Trees: Champion's Edition
<img src="home_screen_mockup.png" alt="Mockup of app home screen" width="200"/>

## Getting Started

The project is built on the Meteor framework

1. Clone this project and `cd` into the directory

2. If you haven't done so already,
[Install meteor](https://www.meteor.com/developers/install)

3. Run `meteor npm install --save @babel/runtime react react-dom`
**note: This step appears to be a bug. Shouldn't need to do this**

4. run `meteor`

You should see your app running on http://localhost:3000

## Deploy

`meteor deploy al-family-of-trees.meteorapp.com --free --mongo`

The app is live at http://al-family-of-trees.meteorapp.com/

It's hosted on the free plan so it may take a couple of minutes for Meteor cloud to bring it up from a cold start.

## Documentation of Expected Functionality

* Rough wireframe layout of app operation: [WIP app wireframe](Screens.jpg)

### Dichotomous Key

* When the user wants to identify a tree using the dichotmous key method, they are presented with a series of questions. They uses swipes right or left according to the choices presented. Subsequent questions are presented until the key determines that the tree has been identified.

* Mockup screen shots of example progression through key
<img src="dichot_1_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_2_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_3_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_4_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_5_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_6_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_7_screenonly.jpg" alt="Mockup of dichotomous key screen" width="200"/>
<img src="dichot_99_screenonly.jpg" alt="Mockup of successful tree identification" width="200"/>

* [VA Tech - dichotomous key tree database online](http://dendro.cnre.vt.edu/dendrology/idit.htm)

* Source of key questions used for demo: University of Kentucky Department of Horticulture's [Dichotomous Keys for the Arboretum Walk](https://www.uky.edu/hort/sites/www.uky.edu.hort/files/pages-attachments/treekeys.pdf); additional info at [Kentucky Trees](https://www.uky.edu/hort/Kentucky-trees)

### Genome Info
<img src="genome_comp_screenonly.jpg" alt="Mockup of genome comparison screen" width="200"/>

* [Explanation](Genome_Compare.jpg) of suggested way to show genome comparisons between species

### Other helpful resources
* Color palette: [Spring Contrast](https://www.canva.com/colors/color-palettes/spring-contrast/)
* [Speech bubble generator](https://www.html-code-generator.com/css/speech-bubble-generator)
