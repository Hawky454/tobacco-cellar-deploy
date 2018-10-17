 # The Tobacco Cellar

**Technogogies used:**

**client-side:**

1. **React**
2. **React Router**
3. **CSS Modules**
4. **Bootstrap**

**Server-side:**

1. **Node.js**
2. **Express**
3. **Knex.js**
4. **PostgreSQL**
5. **bCrypt**


*I've decided to recreate my quarter two project into an exciting and fully functional application using React.js for the front end, Express and PostgreSQL for the back end.

The Tobacco Cellar is designed to keep track of my cellared pipe tobacco & my pipe collection.

Believe it or not there is a decent size community of pipe smokers that collect and age large quantities of pipe tobacco.  Generally, any tobacco with plenty of natural sugars will age wonderfully. Blends go through a fermentation process in the tin, and will improve significantly over time, developing increasing complexity and a wine-like qualities that is hard to describe. I think pipe smoking is one of the most underrated pleasures in existence. If stored properly, a blend can continue to improve in the tin for up to 40 to 50 years before it starts to 'spoil'.

* Who uses it?
Pipe smokers… but of course…
Until now the community has had no real good way of keeping track of their tobacco cellar and I thought it would be really cool to make an app for it.

* What outputs do they need?

**Tobacco (cellared):**                                                                               
1. Name (Brand/House)
2. Blend (Name of blend)
3. Total Weight (lbs, oz, grams)
4. Date of Purchase (mm/dd/yy)
5. Age (Years, Months, Days)
6. Cost ( in USD)
7. Source (Where it was purchase)
8. Rating (1 thru 5)
9. Image (if provided)


**Pipes:**
1. Brand
2. Model
3. Date of Purchase
4. Date of Production (if known)
5. Image (if provided)
6. Pipemaker

Each section of outputs will allow the user CRUD actions.


**Input form for cellared tobacco:**
1. Name (Brand/House)
2. Blend (Name of blend)
3. Total Weight (lbs, oz, grams)
4. Date of Purchase (mm/dd/yy)
5. Age (Years, Months, Days)
6. Cost ( in USD)
7. Source (Where it was purchase)
8. Rating (1 thru 5)
9. Image (url)

**Input form for Opened Tobacco (Currently in use);**
1. Brand
2. Blend
3. Total Weight
4. Date Bought
5. Days it’s been open
6. Cost
7. Source

**Input form for pipes:**
1. Brand
2. Model
3. Date of Purchase
4. Date of Production (if known)
5. Image (url)
6. pipeMaker

I used Boostrap as my css framework but overall I used basic vanilla JavaScript throughout the app, however, I did experiment with ejs and I set up my 'add' form to allow it to populate the the database and respective page.

**User Stories:**

As a user, I need to be able to identify the company (style/brand/logo)<br/>
As a user, I need to be able to delete existing tobacco brands<br/>
As a user, I need to be able to list tobacco brands<br/>
As a user, I need to be able to edit existing tobacco entries<br/>
As a user, I need to be able to link to a specific tobacco brand<br/>
As a user, I need to be able to list all pipes<br/>
As a user, I need to be able to delete existing pipe entries<br/>
As a user, I need to be able to edit existing pipe entries<br/>
As a user, I need to be able to add new pipes<br/>
As a user, I need to be able to navigate between pipes and tobaccos<br/>
As a user, I need to be able to add a new tobacco entry<br/>
As a user, I need to be able to filter/sort tobaccos by brand,age or Rating<br/>
As a user, I need to be able to limit the number of tobacco entries I receive at a time<br/>
As a user, I need to be able to limit the number of pipe entries I receive at a time<br/>
As a user, I need to be able to search for tobaccos by house, brand or style<br/>
As a user, I need to be able to search for pipes<br/>
As a user, I need to be able to search for open (current use) tobaccos<br/>
As a user, I need to be able to see the total number of cellared tobaccos<br/>
As a user, I need to be able to see the total number of opened tobaccos<br/>
As a user, I need to be able to see the total number of pipes<br/>

# Wireframe
![WireframeQ4](/src/assets/Pg1.png)
&nbsp;
![WireframeQ4](/src/assets/Pg2.png)



