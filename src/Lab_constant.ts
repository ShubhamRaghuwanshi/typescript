const events = {
  'dividends': {
    id: 'dividends',
    display: 'Dividends',
    usedIn: ['tooltips', 'charts'],
    headline: 'Dividend Release',
    category: 'News',
    story: function(data: any) {
      return data.story;
    },
    date: function(data: any) {
      return data.date;
    },
  },
  'splits': {
    id: 'splits',
    display: 'Splits',
    usedIn: ['infoBox'],
    category: 'News',
    headline: function() {
      return 'Split Release'
    },
    story: function(data: any) {
      return data.story;
    },
    date: function(data: any) {
      return data.date;
    },
  },
  'high': {
    id: 'high',
    display: 'High',
    category: 'None',
    headline: 'High',
    usedIn: ['charts', 'tooltips'],
  },
  'low': {
    id: 'low',
    display: 'Low',
    category: 'None',
    headline: 'Low',
    usedIn: [],
  },
}

export default events;