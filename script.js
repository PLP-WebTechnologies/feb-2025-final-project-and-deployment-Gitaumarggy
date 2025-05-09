// Recipe data
const recipes = [
    {
        id: 1,
        title: "Chocolate Chip Cookies",
        image: "https://images.pexels.com/photos/7149383/pexels-photo-7149383.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "baking",
        prepTime: "15 mins",
        cookTime: "10 mins",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "1 tsp vanilla extract",
            "2 large eggs",
            "2 cups chocolate chips"
        ],
        procedure: [
            "Preheat oven to 375°F (190°C).",
            "Combine flour, baking soda and salt in small bowl.",
            "Beat butter, granulated sugar, brown sugar and vanilla in large mixer bowl.",
            "Add eggs one at a time, beating well after each addition.",
            "Gradually beat in flour mixture.",
            "Stir in chocolate chips.",
            "Drop by rounded tablespoon onto ungreased baking sheets.",
            "Bake for 9 to 11 minutes or until golden brown.",
            "Cool on baking sheets for 2 minutes; remove to wire racks to cool completely."
        ]
    },
    {
        id: 2,
        title: "Vegetable Stir Fry",
        image: "https://images.pexels.com/photos/6659552/pexels-photo-6659552.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "dinner",
        prepTime: "15 mins",
        cookTime: "10 mins",
        ingredients: [
            "2 tbsp vegetable oil",
            "1 onion, sliced",
            "2 cloves garlic, minced",
            "1 bell pepper, sliced",
            "2 carrots, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 tbsp soy sauce",
            "1 tbsp honey",
            "1 tsp ginger, grated"
        ],
        procedure: [
            "Heat oil in a large wok or skillet over high heat.",
            "Add onion and garlic, stir fry for 1 minute.",
            "Add bell pepper, carrots, broccoli, and snap peas.",
            "Stir fry for 4-5 minutes until vegetables are crisp-tender.",
            "In a small bowl, whisk together soy sauce, honey, and ginger.",
            "Pour sauce over vegetables and toss to coat.",
            "Cook for another minute until sauce thickens slightly.",
            "Serve hot over rice or noodles."
        ]
    },
    {
        id: 3,
        title: "Classic Pancakes",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "baking",
        prepTime: "10 mins",
        cookTime: "15 mins",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "3 1/2 tsp baking powder",
            "1 tsp salt",
            "1 tbsp sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp butter, melted",
            "1 tsp vanilla extract"
        ],
        procedure: [
            "In a large bowl, sift together the flour, baking powder, salt and sugar.",
            "Make a well in the center and pour in the milk, egg, melted butter and vanilla.",
            "Mix until smooth.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Brown on both sides and serve hot with maple syrup and butter."
        ]
    },
    {
        id: 4,
        title: "Avocado Salad",
        image: "https://images.pexels.com/photos/14965992/pexels-photo-14965992/free-photo-of-seafood-meal-on-plate-with-white-wine-on-side.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "vegetarian",
        prepTime: "10 mins",
        cookTime: "0 mins",
        ingredients: [
            "2 ripe avocados, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 cucumber, diced",
            "1/4 red onion, thinly sliced",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish"
        ],
        procedure: [
            "In a large bowl, combine avocado, tomatoes, cucumber and red onion.",
            "In a small bowl, whisk together olive oil, lemon juice, salt and pepper.",
            "Pour dressing over the salad and gently toss to combine.",
            "Garnish with fresh cilantro before serving."
        ]
    },
    {
        id: 5,
        title: "Beef Tacos",
        image: "https://images.pexels.com/photos/5837103/pexels-photo-5837103.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "dinner",
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "1/2 cup water",
            "8 taco shells",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1/2 cup shredded cheddar cheese",
            "1/4 cup sour cream",
            "1/4 cup salsa"
        ],
        procedure: [
            "Brown ground beef in a skillet over medium heat.",
            "Drain excess fat and add taco seasoning and water.",
            "Simmer for 5 minutes until thickened.",
            "Heat taco shells according to package directions.",
            "Fill shells with beef mixture.",
            "Top with lettuce, tomatoes, cheese, sour cream and salsa."
        ]
    },
    {
        id: 6,
        title: "Chocolate Mousse",
        image: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "desserts",
        prepTime: "20 mins",
        cookTime: "0 mins",
        ingredients: [
            "8 oz semisweet chocolate, chopped",
            "2 tbsp unsalted butter",
            "3 large eggs, separated",
            "1/2 tsp vanilla extract",
            "1/2 cup heavy cream",
            "2 tbsp sugar",
            "Whipped cream for garnish"
        ],
        procedure: [
            "Melt chocolate and butter in a double boiler, stirring until smooth.",
            "Remove from heat and whisk in egg yolks one at a time.",
            "Stir in vanilla.",
            "In a separate bowl, beat egg whites until soft peaks form.",
            "Gradually add sugar and beat until stiff peaks form.",
            "In another bowl, whip cream until stiff peaks form.",
            "Gently fold egg whites into chocolate mixture.",
            "Fold in whipped cream until no streaks remain.",
            "Divide into serving dishes and refrigerate for at least 2 hours.",
            "Garnish with whipped cream before serving."
        ]
    }
];

    // DOM Elements
    const recipeGrid = document.querySelector('.recipe-grid');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryLinks = document.querySelectorAll('.categories a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const aboutSection = document.querySelector('.about-section');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.main-nav a');
    const backBtn = document.querySelector('.back-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    // Display all recipes initially
    displayRecipes(recipes);

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#about') {
                e.preventDefault();
                mainContent.style.display = 'none';
                aboutSection.style.display = 'block';
                window.scrollTo(0, 0);
            } else if (this.getAttribute('href') === '#home') {
                e.preventDefault();
                mainContent.style.display = 'block';
                aboutSection.style.display = 'none';
                window.scrollTo(0, 0);
            }
        });
    });

    // Back button
    backBtn.addEventListener('click', function() {
        mainContent.style.display = 'block';
        aboutSection.style.display = 'none';
        window.scrollTo(0, 0);
    });

    // Search functionality
    searchBtn.addEventListener('click', searchRecipes);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchRecipes();
        }
    });

    // Category filter
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
             
            // Always show the main content (recipe grid) when clicking a category
        mainContent.style.display = 'block';
        aboutSection.style.display = 'none';
        
        filterRecipes(category);
            
            // Update active state
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

                  // Scroll to the recipe section
        document.querySelector('.recipes').scrollIntoView({ behavior: 'smooth' });
    });
});
     

    // FAQ accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Functions
    function displayRecipes(recipesToDisplay) {
        recipeGrid.innerHTML = '';
        
        if (recipesToDisplay.length === 0) {
            recipeGrid.innerHTML = '<p class="no-recipes">No recipes found. Try a different search.</p>';
            return;
        }
        
        recipesToDisplay.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="recipe-info">
                    <span class="recipe-category">${recipe.category}</span>
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span>Prep: ${recipe.prepTime}</span>
                        <span>Cook: ${recipe.cookTime}</span>
                    </div>
                    <button class="view-recipe-btn" data-id="${recipe.id}">View Recipe</button>
                </div>
            `;
            recipeGrid.appendChild(recipeCard);
        });

        // Add event listeners to the view buttons
        document.querySelectorAll('.view-recipe-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const recipeId = parseInt(this.getAttribute('data-id'));
                showRecipeDetails(recipeId);
            });
        });
    }

    function showRecipeDetails(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        // Create the detailed view
        recipeGrid.innerHTML = `
            <div class="recipe-details">
                <div class="details-header">
                    <button class="back-to-recipes-btn">← Back to Recipes</button>
                    <h2>${recipe.title}</h2>
                    <div class="details-meta">
                        <span>Category: ${recipe.category}</span>
                        <span>Prep Time: ${recipe.prepTime}</span>
                        <span>Cook Time: ${recipe.cookTime}</span>
                    </div>
                </div>
                <div class="details-content">
                    <div class="details-image">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </div>
                    <div class="details-info">
                        <div class="ingredients">
                            <h3>Ingredients</h3>
                            <ul>
                                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="procedure">
                            <h3>Instructions</h3>
                            <ol>
                                ${recipe.procedure.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add event listener to the back button
        document.querySelector('.back-to-recipes-btn').addEventListener('click', function() {
            displayRecipes(recipes);
        });
    }

    function searchRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) || 
            recipe.category.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    }

    function filterRecipes(category) {
        if (category === 'all') {
            displayRecipes(recipes);
            return;
        }
        
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    }

    // Close mobile nav after clicking a nav link
    document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
    });
});