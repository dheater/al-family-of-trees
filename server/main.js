import {Meteor} from 'meteor/meteor';
import {ChampionTrees} from "../imports/collections/ChampionTrees";

Meteor.startup(() => {
    // If the collection is empty, add some data.
    if (ChampionTrees.find().count() === 0) {
        ChampionTrees.insert({
            name: 'ALDER, Hazel',
            species: 'Alnus serrulata',
            year_named_champion: '2013',
            circumference_in: '15',
            height_ft: '36',
            spread_ft: '18',
            total_points: '56',
            county: 'Talladega',
            last_year_remeasured: '2018',
            owner: 'Allen McBride',
            nominator: 'John McBride',
            image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/121782150/large.jpeg?1618835963',
            inat: 'https://www.inaturalist.org/observations?place_id=any&taxon_id=56033'
        });

        ChampionTrees.insert({
            name: 'AMERICAN SMOKETREE',
            species: 'Cotinus obovatu',
            year_named_champion: '2010',
            circumference_in: '61',
            height_ft: '64',
            spread_ft: '38',
            total_points: '135',
            county: 'Madison',
            last_year_remeasured: '2021',
            owner: 'Carol Rampey',
            nominator: 'Melody Stewart',
            image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/111165036/large.jpg?1611624720',
            inat: 'https://www.inaturalist.org/observations?place_id=any&taxon_id=143781'
        });
    }

    Meteor.publish('ChampionTrees', function () {
        return ChampionTrees.find();
    })
});
