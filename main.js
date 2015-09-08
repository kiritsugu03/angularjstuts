function AppController($scope) {
  $scope.sorting = {
    by: 'price',
    desc: true
  }

  // $scope.watch('filtering', function(newValue){
  //
  // });

  $scope.sortBy = function(byWhat) {
        $scope.sorting.by = byWhat;
        $scope.sorting.desc = !$scope.sorting.desc;
    }

  $scope.items =
  [
    {
      imglink : "http://d3ieicw58ybon5.cloudfront.net/ex/315.362/u/c4ec2c1964c7431786971f0ca964dd49.jpg",
      name : "Pikachu-Charizard Plush",
      price: 10.00,
      desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      moreDesc :"Some more text should display here.",
      tags: ["pokemon", "pikachu", "stuffed toy"]
    },

    {
      imglink : "http://i00.i.aliimg.com/wsphoto/v0/1287085896_1/12-Digimon-Digital-Monsters-Digimon-Adventure-Nyaromon-100-Handmade-Stuffed-Plush-Toy-Cos-Props.jpg",
      name : "Nyaromon Plush",
      price: 15.00,
      desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      moreDesc :"Some more Nyaromon description should display here.",
      tags: ["digimon", "nyaromon", "stuffed toy"]
    },
    {
      imglink : "http://ecx.images-amazon.com/images/I/4188qI6jOmL._AC_UL320_SR302,320_.jpg",
      name : "Tidehunter Plush",
      price: 9.00,
      desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      moreDesc :"Some more Tidehunter Plush description should display here.",
      tags: ["dota 2", "tidehunter", "stuffed toy"]
    }
]


}
