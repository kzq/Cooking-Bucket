app.service('mealsService',function(){
   this.getMeals = function(){
     return meals;  
   }; 
   
   this.addMeal = function(name,type,day){
       meals.push({name: name, type: type, day: day});
   };
   
   var meals = [
        {name: 'Apple and Cheddar Tartine',type: 'Breakfast', day: 'Monday'},
        {name: 'Spicy avocado wraps',type: 'Lunch', day: 'Monday'},
        {name: 'Bourbon Chicken',type: 'Dinner', day: 'Monday'},
        {name: 'Spicy chicken & avocado wraps',type: 'Lunch', day: 'Monday'},
        {name: 'Bombay omelette',type: 'Breakfast', day: 'Monday'},
        
        {name: 'Toast With Yogurt and Smoked Salmon',type: 'Breakfast', day: 'Tuesday'},
        {name: 'Egg & rocket pizzas',type: 'Lunch', day: 'Tuesday'},
        {name: 'Creamy Burrito Casserole',type: 'Dinner', day: 'Tuesday'},
        {name: 'Easy Stovetop Macaroni \'n\' Cheese',type: 'Dinner', day: 'Tuesday'},
        
        {name: 'Scrambled Egg Tacos',type: 'Breakfast', day: 'Wednesday'},
        {name: 'Red lentil & carrot soup',type: 'Lunch', day: 'Wednesday'},
        {name: 'Simple Baked Chicken Drumsticks',type: 'Dinner', day: 'Wednesday'},
        {name: 'Spicy tuna & cottage cheese jacket',type: 'Lunch', day: 'Wednesday'},
        {name: 'Oven-Roasted Greek Potatoes',type: 'Breakfast', day: 'Wednesday'},
        {name: 'Classic crumpets',type: 'Breakfast', day: 'Wednesday'},
        
        {name: 'Yogurt With Grapes and Granola',type: 'Breakfast', day: 'Thursday'},
        {name: 'Green club sandwich',type: 'Lunch', day: 'Thursday'},
        {name: 'Classic Potato Salad',type: 'Dinner', day: 'Thursday'},
        {name: 'Asian chicken salad',type: 'Lunch', day: 'Thursday'},
        {name: 'Simple cheese omelette',type: 'Breakfast', day: 'Thursday'},
        
        {name: 'French Toast With Raspberry Syrup',type: 'Breakfast', day: 'Friday'},
        {name: 'Lunchbox snacks',type: 'Lunch', day: 'Friday'},
        {name: 'Mexican Rice',type: 'Dinner', day: 'Friday'},
        {name: 'Melon & crunchy bran pots',type: 'Lunch', day: 'Friday'},
        {name: 'Chicken Tikka Masala',type: 'Dinner', day: 'Friday'},
        
        {name: 'Cottage Cheese With Minted Pineapple',type: 'Breakfast', day: 'Saturday'},
        {name: 'Red lentil & sweet potato pâté',type: 'Lunch', day: 'Saturday'},
        {name: 'Fantastic Taco Casserole',type: 'Dinner', day: 'Saturday'},
        {name: 'Prawn layered salad',type: 'Lunch', day: 'Saturday'},
        {name: 'Irish mackerel breakfast',type: 'Breakfast', day: 'Saturday'},
        
        {name: 'Egg Sandwich With Ham and Spinach',type: 'Breakfast', day: 'Sunday'},
        {name: 'Spicy couscous salad',type: 'Lunch', day: 'Sunday'},
        {name: 'Broil a Perfect Steak',type: 'Dinner', day: 'Sunday'},
        {name: 'Indian chickpea & vegetable soup',type: 'Lunch', day: 'Sunday'},
        {name: 'Crusty French Bread',type: 'Dinner', day: 'Sunday'},
        {name: 'Quick Mexican breakfast',type: 'Breakfast', day: 'Sunday'}
   ];
   
});
