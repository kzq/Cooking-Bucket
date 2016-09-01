app.service('mealsService',function($filter){
   this.getMeals = function(){
     return meals;  
   }; 
   
   this.getDayMeals = function(day){
       var dayMeals= $filter('filter')(meals, {day: day});
       return dayMeals;
   };
   
   this.insertMeal = function(name,type,day){
       var newId = meals.length + 1; 
       meals.push({id: newId, name: name, type: type, day: day});
   };
   
   var meals = [
        {id: 1,name: 'Apple and Cheddar Tartine',type: 'Breakfast', day: 'Monday'},
        {id: 2,name: 'Spicy avocado wraps',type: 'Lunch', day: 'Monday'},
        {id: 3,name: 'Bourbon Chicken',type: 'Dinner', day: 'Monday'},
        {id: 4,name: 'Spicy chicken & avocado wraps',type: 'Lunch', day: 'Monday'},
        {id: 5,name: 'Bombay omelette',type: 'Breakfast', day: 'Monday'},
        
        {id: 6,name: 'Toast With Yogurt and Smoked Salmon',type: 'Breakfast', day: 'Tuesday'},
        {id: 7,name: 'Egg & rocket pizzas',type: 'Lunch', day: 'Tuesday'},
        {id: 8,name: 'Creamy Burrito Casserole',type: 'Dinner', day: 'Tuesday'},
        {id: 9,name: 'Easy Stovetop Macaroni \'n\' Cheese',type: 'Dinner', day: 'Tuesday'},
        
        {id: 10,name: 'Scrambled Egg Tacos',type: 'Breakfast', day: 'Wednesday'},
        {id: 11,name: 'Red lentil & carrot soup',type: 'Lunch', day: 'Wednesday'},
        {id: 12,name: 'Simple Baked Chicken Drumsticks',type: 'Dinner', day: 'Wednesday'},
        {id: 13,name: 'Spicy tuna & cottage cheese jacket',type: 'Lunch', day: 'Wednesday'},
        {id: 14,name: 'Oven-Roasted Greek Potatoes',type: 'Breakfast', day: 'Wednesday'},
        {id: 15,name: 'Classic crumpets',type: 'Breakfast', day: 'Wednesday'},
        
        {id: 16,name: 'Simple cheese omelette',type: 'Breakfast', day: 'Thursday'},
        {id: 17,name: 'Green club sandwich',type: 'Lunch', day: 'Thursday'},
        {id: 18,name: 'Classic Potato Salad',type: 'Dinner', day: 'Thursday'},
        {id: 19,name: 'Asian chicken salad',type: 'Lunch', day: 'Thursday'},
        {id: 20,name: 'Yogurt With Grapes and Granola',type: 'Breakfast', day: 'Thursday'},
        
        {id: 21,name: 'French Toast With Raspberry Syrup',type: 'Breakfast', day: 'Friday'},
        {id: 22,name: 'Lunchbox snacks',type: 'Lunch', day: 'Friday'},
        {id: 23,name: 'Mexican Rice',type: 'Dinner', day: 'Friday'},
        {id: 24,name: 'Melon & crunchy bran pots',type: 'Lunch', day: 'Friday'},
        {id: 25,name: 'Chicken Tikka Masala',type: 'Dinner', day: 'Friday'},
        
        {id: 26,name: 'Cottage Cheese With Minted Pineapple',type: 'Breakfast', day: 'Saturday'},
        {id: 27,name: 'Red lentil & sweet potato pâté',type: 'Lunch', day: 'Saturday'},
        {id: 28,name: 'Fantastic Taco Casserole',type: 'Dinner', day: 'Saturday'},
        {id: 29,name: 'Prawn layered salad',type: 'Lunch', day: 'Saturday'},
        {id: 30,name: 'Irish mackerel breakfast',type: 'Breakfast', day: 'Saturday'},
        
        {id: 31,name: 'Egg Sandwich With Ham and Spinach',type: 'Breakfast', day: 'Sunday'},
        {id: 32,name: 'Spicy couscous salad',type: 'Lunch', day: 'Sunday'},
        {id: 33,name: 'Broil a Perfect Steak',type: 'Dinner', day: 'Sunday'},
        {id: 34,name: 'Indian chickpea & vegetable soup',type: 'Lunch', day: 'Sunday'},
        {id: 35,name: 'Crusty French Bread',type: 'Dinner', day: 'Sunday'},
        {id: 36,name: 'Quick Mexican breakfast',type: 'Breakfast', day: 'Sunday'}
   ];
   
});
