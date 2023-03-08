// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/'
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.green.lighten1
                , // #9CCC65
                secondary: colors.red.lighten1, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    }
}

export default new Vuetify(opts)
