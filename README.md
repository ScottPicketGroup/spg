# spg

# Welcome!

Firstly, it is imperitive these instructions are followed to the letter and that the development is done pixel perfect to the design.

Styled Components alongside Flexbox are to be used in the creation of all elements. No external libraries should need to be used to create the components. (Image sliders have already been completed. As have the footer logo slider and the contact forms).

Only rem units to be used.

a. Each page should be setup with a <Page> container (to be created in global styles) which contains the page padding as stated in the design. (5.25rem left and right).
b. Containers or element widths should be adhered to as percentage of <Page> container. Ie <Container width=100%> <ImageContainer width=58%> <TextContainer 42%> <Container>. These percentages should be taken as the amount of columns from the xd document / 12. Ie if an element is 3 columns wide, it should be 3 /12 = 25% or 7 / 12 = 58%.
c. All top / bottom margins are to be exact.
d. Please put all styled-components in the appropriate styled-components folder and import them for each .jsx file. 
  
Please complete tasks in the following order.
  
1. Create 2 variables files, 1 for each desktop and mobile. In those variables files input the 3 colours, along with the font styling properties for each of the text styles within the XD document. 
  
2. Create Global Styles with the following: 
  - Import fonts, colours and text styles from variables files.
  - Global reset
  - Page Container
  - Section Container (100% width - display: flex - flex-wrap for mobile) (max width: 450px media query with flex-direction: column) logically....
  - Text styles:  h1, h2, h3, h4, h5 as normal. Then a p (is const P = styled.p``) with props bc1, bc2, bc3, FormFieldLabel, ImageCaption, footer, button, menu1, menu2, menu2opaque, menu3, which are the bodycopy 1/2/4 etc from the style guide in the xd file provided.
  - Button with props for error (error colour) : charcoal (grey colour provided in style guide).
  
  3. Create Menu sidebar. Follow instructions for menu elements and the sticky logo. For the menu elements that are not included ie shop, providor etc just make them point to /*element and I will update later.
  
  4. Program out the rest of the page as per the instructions provided. 
  *** DO NOT program the slider, I will put this element in.
  *** Also, program the footer minus the sliding logos element. I will also insert this element.
  
  5. Scott Picket (second page) - program out, pretty straight forward.
  
  6. Events landing page - pretty straight forward.  Just create the Container for each venue as a link and I will fill in the 'to=/' URLs later.
  
  7. Whats On landing page - These events will come from Contentful. If this isnt done yet, do the rest of the page and we will complete later.
  
  8. Careers - Same as above. 
