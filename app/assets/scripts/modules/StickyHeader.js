import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smootScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.triggerElement = $('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSection = $('.page-section');
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWayPoint();
    }

    refreshWayPoint() {
        this.lazyImages.on('load', function() {
            Waypoints.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var self = this;
        new Waypoint({
            element:self.triggerElement[0],
            handler: function(dir) {
                if(dir == 'down') {
                    self.siteHeader.addClass('site-header--dark');
                } else {
                    self.siteHeader.removeClass('site-header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var self = this;
        this.pageSection.each(function() {
            var currentPageSection = this;
            var offset = "";
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '18%'
            });
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '-40%'
            });
        });
    }

}

export default StickyHeader;


