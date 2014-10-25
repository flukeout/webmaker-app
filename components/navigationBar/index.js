var i18n = require('../../lib/i18n');

module.exports = {
    id: 'navigationBar',
    template: require('./index.html'),
    created : function(){
        var confirmAttribute = this.$el.getAttribute("confirmlabel");
        this.confirmLabel = confirmAttribute || i18n.get("Done");
        var cancelAttribute = this.$el.getAttribute("cancellabel");
        this.cancelLabel = cancelAttribute || i18n.get("Cancel");
    },
    data: {
        goBack: function (e) {
            e.preventDefault();
            global.history.back();
        }
    }
};
