function banners(){
    var bannerOne, bannerTwo, bannerThree, bannerFour;

    var oneB = document.getElementById('michaelsBanner');
    var twoB = document.getElementById('subZeroBanner');
    var threeB = document.getElementById('surfJamBanner');
    var fourB = document.getElementById('communityBanner');

    var michael = {
        container: oneB,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'Banners/joshBanner01.json'
    }

    var subZero = {
        container: twoB,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'Banners/data.ShopBanner.json'
    };

    var surfJam = {
        container: threeB,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'Banners/joshBanner02.json'
    }

    var community = {
        container: fourB,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'Banners/data.test.json'
    };

    bannerOne = bodymovin.loadAnimation(michael);
    bannerTwo = bodymovin.loadAnimation(subZero);
    bannerThree = bodymovin.loadAnimation(surfJam);
    bannerFour = bodymovin.loadAnimation(community);
}