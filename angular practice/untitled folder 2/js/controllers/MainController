app.controller('MainController', ['$scope', function($scope) {
    $scope.dinerName = "Italian Cuisine";
    $scope.cssClass = "";
    $scope.font = 0;
    $scope.priceInput = 0;
    $scope.DescriptionInput = "";
    $scope.DishInput = "";
    $scope.editText = false;
    $scope.editContent = false;
    $scope.today = new Date();
    $scope.courses = [
        {
            title: "Appetizers",
            items: [
                {
                    name: 'Fried Mozzarella',
                    description: 'Mozzarella sticks that have been battered and fried',
                    price: 3.95
                },
                {
                    name: 'Caprese',
                    description: 'Heirloom tomatos, fresh mozzarella, and basil, lightly coated with basalmic vinegarette.',
                    price: 5.00
                },
                {
                    name: 'Bread Sticks',
                    description: 'Bread sticks with our world famous marinara sauce.',
                    price: 3.25
                }
            ]
        },
        {
            title: "Entrees",
            items: [
                {
                    name: 'Chicken Fettuccine Alfredo',
                    description: 'Grilled Chicken seasoned with rosemary and oregano.  Served over fresh fettuccine tossed in a decadent cream sauce',
                    price: 11.95
                },
                {
                    name: 'Stuffed Chicken Marsala',
                    description: 'Chicken stuffed with herbs, cheese, and a house-made pesto.  Served with oven roasted fingerling potatoes',
                    price: 15.95
                },
                {
                    name: 'Spaghetti Bolgnese',
                    description: 'Our homemade pasta topped with a delicious tomato and meat sauce',
                    price: 10.95
                }
            ]
        },
        {
            title: "Sides",
            items: [
            {
                name: 'Toasted Gnocchi',
                description: 'Fresh potato dumplings fried in olive oil and coated in a basil pesto.',
                price: 3.95
            },
            {
                name: 'Soup',
                description: 'Your choice of Tomato Basil, Italian Wedding, Pancetta and Vegetable, or our soup of the day.',
                price: 5.00
            },
            {
                name: 'Chef\'s Salad',
                description: 'Green salad with pepproccinis, olives, parmesan cheese, and our homemade Italian dressing.',
                price: 3.25
            }
            ]
        }
        ];
    $scope.billItems = [];

   //Edit Content View Enabled
   $scope.editEnabled = function() {
       $scope.editContent = true;
   };
   //Edit Content View Disabled
    $scope.editDisabled = function() {
       $scope.editContent = false;
   };
   
   //Changes color of either background or text
    $scope.setBackColor = function() {
        var colorHex = document.getElementById("colorhexDIV").textContent;
        if ($scope.editText === false) {
            angular.element($scope.cssClass).css('background-color', colorHex);
        }
        else {
            angular.element($scope.cssClass).css('color', colorHex);
        }
        console.log(colorHex);
        console.log($scope.cssClass);
   };
   
   $scope.selectedFont = function(fontPicked) {
       $scope.font = fontPicked;
       console.log($scope.font);
   };
   
   $scope.setFont = function() {
       console.log($scope.font);
       angular.element($scope.cssClass).css('font-family', $scope.font);
   };
   
   //Sets the class that will be edited
    $scope.setClass = function(className, text) {
       $scope.cssClass = className;
       if (text)
       {
           $scope.editText = true;
       }
       else
       {
           $scope.editText = false;
       }
   };
   
   //Adds a Menu Item
    $scope.AddMenuItem = function() {
        console.log($scope.courseInput);
        console.log($scope.courses.length);
        for(var i=0; i < $scope.courses.length; i++)
        {
            console.log($scope.courses[i].title);
            if($scope.courseInput === $scope.courses[i].title)
            {
                $scope.courses[i].items.push(
                {
                    name:$scope.DishInput,
                    description: $scope.DescriptionInput,
                    price: $scope.PriceInput
                });
            }
        }
    };
    
    $scope.toggleBill = function(newname, newprice) {
        console.log(newname);
        var i = -1;
        var index;
        if ($scope.billItems.length === 0)
        {
            i = -1;
        }
        else{
             for (index = 0; index < $scope.billItems.length; index++) {
                if ($scope.billItems[index].name === newname) {
                    i = index;
                    break;
                }
            }
            
        }
        console.log(i);
        if (i > -1) {
            $scope.billItems.splice(i, 1);
        }
        else {
            $scope.billItems.push(
                {name: newname,
                price: newprice
                }
            );
        }
        console.log($scope.billItems[0])
        $scope.priceInput=0;
        for (i = 0; i < $scope.billItems.length; i++) {
            $scope.priceInput += $scope.billItems[i].price;
        }
    };
}]);