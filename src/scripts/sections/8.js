const placemarks = [
        {
            latitude: 59.97,
            longitude: 30.31,
            hintContent: '<div class="contacts__map-hint">ул. Литераторов, д. 19</div>',
            balloonContent: [
                '<div class="contacts__map-balloon">',
                'Самые вкусные бургеры у нас! </br> Заходите по адресу: ул. Литераторов, д. 19',
                '<img class="contacts__map-balloon-img" src="images/8/burger.png" alt="Бургер"/>',
                '</div>'
            ]
        },
        {
            latitude: 59.94,
            longitude: 30.25,
            hintContent: '<div class="contacts__map-hint">Малый проспект В О, д 64</div>',
            balloonContent: [
                '<div class="contacts__map-balloon">',
                'Самые вкусные бургеры у нас! </br> Заходите по адресу: Малый проспект В О, д 64',
                '<img class="contacts__map-balloon-img" src="images/8/burger.png" alt="Бургер"/>',
                '</div>'
            ]
        },
        {
            latitude: 59.93,
            longitude: 30.34,
            hintContent: '<div class="contacts__map-hint">наб. реки Фонтанки, д. 56</div>',
            balloonContent: [
                '<div class="contacts__map-balloon">',
                'Самые вкусные бургеры у нас! </br> Заходите по адресу: наб. реки Фонтанки, д. 56',
                '<img class="contacts__map-balloon-img" src="images/8/burger.png" alt="Бургер"/>',
                '</div>'
            ]
        }
    ],
    geoObjects= [];

export function init () {
    const map = new ymaps.Map('map', {
        center: [59.938936, 30.314466],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (let i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/8/placemark.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
            });
    }

    const clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'images/8/placemark.png',
                size: [46, 57],
                offset: [-23, -57]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}