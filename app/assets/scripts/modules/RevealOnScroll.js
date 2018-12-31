import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemToReveal = els;
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        var self = this;
        this.itemToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: self.offset
            });
        });
    }
}

export default RevealOnScroll;