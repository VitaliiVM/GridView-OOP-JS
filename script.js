const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
gridView.header = 'Table';
gridView.headerClass = ['header', 'site-header'];
gridView._attribute = {
    'company': {
        'label': 'Company',
        'src': 'html',
    },
    'chef': {
        'label': 'Director',
    },
    'country': {
        'label': 'Country',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map'
            }
            return data['country'];
        }
    }
};
gridView.data = dataExample;
gridView.render();