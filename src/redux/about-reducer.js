let initialState = {
    education: [
        {
            id: 1, program: 'Study program', company: 'Lviv Polytechnic National University',
            period: '09/2016 - 06/2020', description: 'Speciality - Computer Science'
        },
        {
            id: 2, program: 'ReactJs - Way Samurai', company: 'IT-Incubator',
            period: '02/2020 - 04/2020', description: 'ReactJs online course'
        },
        {
            id: 3, program: 'Front-End Development', company: 'EPAM',
            period: '03/2020 - 05/2020',
            description: 'Two months Frontend online course with mentors. Successfully passed all tasks.'
        },
        {
            id: 4, program: 'ReactJs+Redux', company: 'Udemy',
            period: '05/2020 - 07/2020', description: 'Some description'
        },
        {
            id: 5, program: 'Self-education', company: 'Anywhere',
            period: 'All time', description: 'Some description'
        },
    ],
    skills: [
        {
            id:1,
            name: 'JavaScript',
            iconUrl: 'https://www.freepnglogos.com/uploads/javascript/js-circle-black-design-logo-30.png'
        },
        {
            id:2,
            name: 'HTML',
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/1200px-HTML5_logo_black.svg.png'
        },
        {
            id:3,
            name: 'CSS',
            iconUrl: 'https://p7.hiclipart.com/preview/889/394/430/the-daily-dot-internet-online-newspaper-reddit-others.jpg'
        },
        {
            id:4,
            name: 'ReactJS',
            iconUrl: 'data:image/png;base64,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'
        },
        {
            id:5,
            name: 'Redux',
            iconUrl: 'data:image/png;base64,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'
        },
        {
            id:6,
            name: 'Bootstrap4',
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAkFBMVEUAAAD39/f////8/Py2trb6+vrz8/P29vbh4eHl5eXt7e3q6urw8PA5OTnOzs6ZmZnIyMiurq68vLxKSko+Pj6Pj49tbW1DQ0Obm5uhoaGoqKiwsLBmZmbAwMCHh4fc3NwXFxdZWVkyMjJ5eXkdHR0LCwtdXV2JiYl/f3/U1NQnJydQUFAcHBwrKytiYmI0NDQGaCRFAAALsElEQVR4nO2de3uiOhDGS2JUvCCgeMEblq71cmy//7c7YisqSdAZEgk+ff/Z8+zuyc6vIpCZdyZv1gvrrewAdOoPrqr6g6uq/uCqqj84idhR9L7YRfdWy6pAcInAcCcechStt5tbx5370zCcjHuJguD0S288nkzC0JvW/PncdR1nu10um7bdbrc6nXq9cf6p/ETfqNc7nVar1W637aOav7J//n6DkR+d/r4+OJYwNeytHwbxbBC9PUvRe38WLybefGvXE8rHGR+DS7g621rwdXgakli71WLqtOmRUBEcI9SubbolY13rMPSWx6gKwzFiOZv3smkE+ojn9Xt8+XCUbDf/ysaQa+bSXLw8OMq8Qdnx39HHuE4wcJRNDP7QLgoa0k9PBsfItBJoiaZEcu+UwJGl6Rfktfq2+NoUwjEyLjteoHwhnQiO1ldlBwvWp4hOAEftj7JDRWgooOPh6LLsOHES0HFwtFl2lFhtOLosHGtV5gnAycvSZeFolR4BWS1ZLhxZlB1gEXVpHhx1yo6vmCYkD87EzQ1ELSaFo2HZwRXVgkjhWFR2cIXVkcHRWtmhFdeYSuBIv+zQimtHxHCssu8m13KYEI5WbZ8j1PUt5QruFa7Kt7dIDNcoOy41ajIBHJ2XHZYahVQAR4Kyw1Kjq33dFVz1cgtC7YRw1d3I3aougKuXHZQqXZ50KRzblh2UKnmUg6N+2UGpUkB4uEnZQanSkIcjn2UHpUp7AVxcdlCq9C2A+9LyL0W771F/vzpr3x+9/6flH7r6J/kbCtlj1tntot3hvXuMf78exptF0Jt4Nd91tsum3Wr8mjqyotRq2Uu3FgbxSkepnX/OEUzC0icnG81N4KmvxspTamdhthtuMD9YuRo8HOZnWLvvKLgrlkCy5jRWlnlLX1EucJi1VcCdEQlte2tdcBj/jDq4X8B6TcEV2jIRLhElduGtlwCu3MvyIkbqBZM5ae7yAvdtCFwSS2dTBE7wnSvrbinGWxa4dwrgRibBWZTiXwcFzznMbUof3DEgdFUmXaLYu6VOOItg03H8TpwMTYOzCG7/vBO8OGOucb1wFulh4ERbHkw1XDMcLt04EqQZMC8GuuFYGxGUYCeOyqHohrMwDruZAM4zEc6yInBQsQAOUzPWD4f46DYCOMxTRT8cs8FBifKWrmo4km8df1DwN6eJIOOsGq7x3XNbNE2r0Ey25dHeHPiNLnwCnJX8hd0+/uyFnjedel7SzhR8LjaJFsffrTk2u9+3wsCOLRGc8u/cA/9/tJ4077V1tKBBiQohZcAl6rs5bQ9JYFBTsqoqjwq46weTSGCThVlwnAn0Fg6a7xPBKX+IP76MyFl+gYPuxUQ3lClwjUSK4DI2SQ1wyt8tAeuMc9YhM2BQooc4JmWhCq6bc12C93RjAZzyLQ9kIVt+XYLLTz3T4HIWAtt3RS/OmHyFMji+myMV+A1l8Yw0A2ShvRQO7o8R7OdQbgZlcN/SheCPKMFOnGBqD8rgDtKF4Fk5kQ9Fed4SslC2UeUKDlyrFySI1GecIQt9Sb9z4PvJ29o0OOkrCmInJnIQKS+EQBaS7gsQtwJBxhmVuVYF15delXQHDqorgMMY71XBbWXrYFyg7wI4jINIEdxC+sFhHlCiEpbygv/Dq6zk716YXod/guKjch/Ko4vM5GwE5XC9RHD+D3CSKZEKuEnOXg7XpMIX/BnGeV8c7ksyM+Lng8M5GnirBuixdFZRuOFSNu3jxIas+PMOItQVUAhu5bXy0PCzBtJtfQqH6pnAwv3bB27nTh6d2tgWleUT4NzpeBGvB4ePNMho113HgefaD5S3CH7+xTYLhyqt58Ox34oVtU7z5jrn0XL0kYlkSA/KSQ4Hh7rAdVVWKSvSCOCeo0rhUFeBLkuiU2jczJyDQ/UpaYGj9YL9GzUODjVyQotTtvAMBc9cOFQC9UaTLByuHVfLZYm2Ip415uBQt149NxTaLNYEE3BwmPKcrrslY4UG6qR73xQO9TXWZ+B2Chi4Yw4OtS3UaeDG904MOThUo4JWA3cTOytixsGhflBajW2MYCrZb1fp6zMcbiaWbo9zG/XhrTg4VIOJdhswqrDW5+AwpYJnmEkRd/FB9jlnKpyF+OK9c3CoZuO7cL+T4wncZ3mhA79r7jg4VEdlvlOWsHpr6frepPe5iYeJ4k3QC323WWfkwQnhFsIr+8HBodopc+FWXXlH+Ec/njh18sCIcITN+V82zYCbrlQwbzn6dFludu83Nuid/JxyTh/iqLmWCtLpm+3djw+cvDqnnFM41C5DSSFkML/36UHvdueUcwqHOolAUX1usL3jBAamCTg4eHn2TWFNPMi/d5IIFNa5lzqFQyXTlMG9rRq5VmDYW1ib3cLhRluqg3sb5X1ywPRVFs5CVR0UwuUVWI8XFmgpOwOHq2GqhLtylfOCeYGbGTjc1C+lcFfTyPhPDpQFWRoIN5GvBvvSbTNwHXAoidTC5di4YS8pJsKldzmBQJMAnQwc3PmXSDHcXL4caHSEkXA5XzpQpiALh6oaq4br5cBBtj0ZOFxJ/JlwkBewc93YKLicyxJUtTMSzn9luJwmQVC6PwsH7zVPpBguZzFQut9EOHnPC9DAZyJcbosgJI1iIlxeXy7IyGsg3CA3SwRZyUC4MGcxmDXNQLhOzlowJ0n29at8OHlzgQWdWm/cu+UsJ8kALWUYBheJj/5LBcuCbE2C+witO35nmHkrm2YoES5279Z5gEXtbParnJ3493CyfagCCQsrm5TVkCD6HoyOGgy63e77YfcR/UsU/bc7/v5qGAfhfPlo8Rjqusum0zXAcaOrk1J/Wv2nD5nUf1cCFg/b1i2chqSsMoFPxcuWsDTUCpQJbEbIFh81lLBUCT60iyv4qy8+KoODVrSjrFVDQ01ckRQ4iDS4GdQIcWDvdxZOg8lGiVgd/n3hLYmow6L0w1GEbWvNwUFnND0FjlGM344zcON6XzXDMQt1PW2q4HGmbVxnSI+7W6Lag3TCMXRPT8jBmdURkpxZgDImJ/I5OIMalZJwinTR8T2rxvTPJRckDYscu9Tk4EzpWWWUtAsegcKPL0DtVlXDHclaXuHDa/iRIepnM4C5iOX0FBxkK5hkg3KTKjku6tQs31j6gaLjQleKZhD5p2zI8TJo1E9qNH4+Aj57wuvnjxutpTPtxSoPMxPN2sM8VtbD1ah72EXR2byUZLcO791Bf7/6So5s+wx6k9Cr1Xx/Pp+7P5rP/VotHAeLeD06aDj/VDC881UOyL02WRUbmGuklvzd8nXOWb3c5C6Pglc5IfcgPNs4KjssNZoJ4dQc21e6eqLL8lVul64I7lVOgr8qP1/5rXCFHtP0ToRwqFGCxmkjgXuJo5uvPZtXcLjNuGm6dnxcexxf4Ul3MyvzBu4FHgY33U7XcEiPlFFqWRI45AwDk3R72sgNHG4mnUlymBQOOTjEHGXmQWcc4RV/S3FoHhwuq26Ksuf7ZL38yBm1RijKWja5RgWmMsv2XC2zWVQerqUh2/YUOVyGmG8xoRV9lAtOehP0z1A7KjtQhESn2Imag2gHc7Z4uRLO5RB2PjFasYf5zhZWZCRtXWQelR0wQGvJSA5ZzxptFBox+VT1ZJNw5A15xK7GHmEnH4OT023IiF2Br94nkxdA81opj3h1z+wb57qZ10mSC3cUJXZYuAKvS3HucQf34U5l4IYbmAc49K17I7Xuw50+P0pY0+8NTXmpXo8d9kAjyWNwiU6mA9be+l5vMVyNvmUO1ujj0B3196v1LKmJfwa98ST0prVaUhj3/eTXaTgZB8FiM/za9wewqnjUj8d+84HznoFwv4jnng5KrUaj07Ztu5nIttutzq+b4cbOIPMzpH/MrEbLXm6dec1LXACbeDhb7/ujwalPptsdjPqrr3jzOQ59Z3marvh4JwkUjodNVXCV7IHjGYHnYlrF4YzWH1xV9QdXVf3BVVV/cFXVH1xV9QdXVb003P8YoMXsXo0+9QAAAABJRU5ErkJggg=='
        },
        {
            id:7,
            name: 'SCRUM',
            iconUrl: 'data:image/png;base64,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'
        },
        {
            id:8,
            name: 'Git',
            iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png'},
        {
            id:9,
            name: 'NodeJS',
            iconUrl: 'https://w7.pngwing.com/pngs/681/453/png-transparent-node-js-javascript-computer-icons-computer-software-github-angle-text-logo.png'
        },
        {
            id:10,
            name: 'My SQL',
            iconUrl: 'https://cdn.worldvectorlogo.com/logos/mysql-1.svg'},
    ]
}

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default aboutReducer;