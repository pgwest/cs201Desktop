function Ctrl($scope) {

    $scope.array1 = [0, 0, 0, 0, 0, 0, 0, 0]; //number on top in binary

    $scope.val1 = 0;

    $scope.array2 = [0, 0, 0, 0, 0, 0, 0, 0]; //number on bottem in binary

    $scope.val2 = 0;

    $scope.array3 = [0, 0, 0, 0, 0, 0, 0, 0]; //result number

    $scope.val3 = 0;

    $scope.array4 = [0, 0, 0, 0, 0, 0, 0, 0]; //this is the result flipped around to match the interface and is displayed

    $scope.updateOutput = function (ind, row) {
        // time to load = = = = = = = = = = = = = = = = = = = = = = = = =
        
        if (row === 2)
        {
            if ($scope.array2[ind] === 0) {
                $scope.array2[ind] = 1;
            }
            else {
                $scope.array2[ind] = 0;
            }
        }
        else if (row === 1)
        {
            if ($scope.array1[ind] === 0) {
                $scope.array1[ind] = 1;
            }
            else {
                $scope.array1[ind] = 0;
            }
        }// works!!!! = = = = = = = = =  =


        var carry = false; // time to add= = = = = = = = = = = = = = = = = = = =
        for (i = 0; i < 8; i++)
        {
            if ($scope.array1[i] === 1 && $scope.array2[i] === 1) //1 + 1if no work add quotes
            {
                if (carry === true) {
                    $scope.array3[i] = 1;
                    carry = true;
                } else {
                    $scope.array3[i] = 0;
                    carry = true;
                }
            } else if (($scope.array1[i] + $scope.array2[i]) === 1) // 1 + 0
            {
                if (carry === true)
                {
                    $scope.array3[i] = 0;
                    carry = true;
                }
                else
                {
                    $scope.array3[i] = 1;
                    carry = false;
                }
            } else if (($scope.array1[i] + $scope.array2[i]) === 0) // 0 + 0
            {
                if (carry === true)
                {
                    $scope.array3[i] = 1;
                    carry = false;
                } else
                {
                    $scope.array3[i] = 0;
                    carry = false;
                }
            }
        } //done adding = = = = = = = =now update values
        var multi = 1;
        $scope.val3 = 0;
        for (i = 0; i < 8; i++)
        {
            var added = $scope.array3[i] * multi;
            $scope.val3 += added;
            multi = multi * 2;
        }
        multi = 1;
        $scope.val2 = 0;
        for (i = 0; i < 8; i++) {
            var added = $scope.array2[i] * multi;
            $scope.val2 += added;
            multi = multi * 2;
        }
        multi = 1;
        $scope.val1 = 0;
        for (i = 0; i < 8; i++) {
            var added = $scope.array1[i] * multi;
            $scope.val1 += added;
            multi = multi * 2;
        }

        for (i = 0; i < 8; i++)
        {
            $scope.array4[i] = $scope.array3[7 - i];
        }
        
    };
}

/*
var carry = false; // time to add= = = = = = = = = = = = = = = = = = = =
for (i = 0; i < 8; i++) {
    if ($scope.array1[i] === 1 && $scope.array2[i] === 1) //1 + 1if no work add quotes
    {
        if (carry === true) {
            $scope.array3[i] = 1;
            carry = true;
        } else {
            $scope.array3[i] = 0;
            carry = true;
        }
    } else if (($scope.array1[i] + $scope.array2[i]) === 1) // 1 + 0
    {
        if (carry === true) {
            $scope.array3[i] = 0;
            carry = false;
        } else {
            $scope.array3[i] = 1;
            carry = false;
        }
    } else if (($scope.array1[i] + $scope.array2[i]) === 0) // 0 + 0
    {
        if (carry === true) {
            $scope.array3[i] = 1;
            carry = false;
        } else {
            $scope.array3[i] = 0;
            carry = false;
        }
    }
} //done adding
*/