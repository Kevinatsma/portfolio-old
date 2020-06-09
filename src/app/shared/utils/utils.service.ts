import { Injectable } from '@angular/core';
import { ElementInView } from '../models/general.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  GRADIENT_CLASSES = ['g1', 'g2', 'g3', 'g4'];
  FULLY_SCREEN_PERCENT = 0.01;
  THREE_QUARTERS = 0.25;
  HALF_SCREEN_PERCENT = 0.5;
  MENU_PERCENT = 0.3;
  PARTIALLY_SCREEN_PERCENT = 0.82;
  JUST_PARTIALLY_SCREEN_PERCENT = 0.98;

  observeElement = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        if (entry.target.classList.contains('in-view')) {
          entry.target.classList.remove('in-view');
        }
      }
    });
  }, {threshold: 0.9});

  constructor() {}

  isMobile(): boolean {
    let check = false;
    if (navigator) {
      ((a) => {
        // tslint:disable-next-line:max-line-length
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) { check = true; }
      })(navigator.userAgent || navigator.vendor);
    }
    if (window && window.innerWidth < 800) { check = true; }

    return check;
  }

  colorLinks(e) {
    const el = e.target;
    this.GRADIENT_CLASSES.forEach(color => {
      el.classList.remove(color);
    });

    const randomColor = this.GRADIENT_CLASSES[Math.floor(Math.random() * this.GRADIENT_CLASSES.length)];
    el.classList.add(randomColor);
  }

  getScreen = () => ({
    scrollY: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight,
  })

  getClientRect = (el) => {
    if (el) {
      const d = el.getBoundingClientRect();
      return {
        left: d.left || d.x,
        right: d.right || d.y,
        x: d.x || d.left,
        y: d.y || d.top,
        top: d.top,
        bottom: d.bottom,
        width: d.width,
        height: d.height,
      };
    }
  }

  isElementInView = (domRect, screen) => {
    if (domRect && screen) {
      const fullyS = screen.height * this.FULLY_SCREEN_PERCENT;
      const menuS = screen.height * this.MENU_PERCENT;
      const threeQs = screen.height * this.THREE_QUARTERS;
      const halfS = screen.height * this.HALF_SCREEN_PERCENT;
      const partiallyS = screen.height * this.PARTIALLY_SCREEN_PERCENT;
      const justS = screen.height * this.JUST_PARTIALLY_SCREEN_PERCENT;

      const elementInView: ElementInView = {
        x: domRect.x,
        y: domRect.y,
        width: domRect.width,
        height: domRect.height,
        fully: Math.abs(domRect.y) >= 0 && Math.abs(domRect.y) <= fullyS,
        threeQ: Math.abs(domRect.y) >= 0 && Math.abs(domRect.y) <= threeQs,
        menu: Math.abs(domRect.y) > 0 && Math.abs(domRect.y) < menuS,
        half: Math.abs(domRect.y) > 0 && Math.abs(domRect.y) < halfS,
        partially: Math.abs(domRect.y) > 0 && Math.abs(domRect.y) < partiallyS,
        entering:
          Math.abs(domRect.y) < screen.height && Math.abs(domRect.y) > partiallyS,
        justEntering:
          Math.abs(domRect.y) < screen.height && Math.abs(domRect.y) > justS,
        inactive: Math.abs(domRect.y) > screen.height - 1,
      };

      return elementInView;
    }
  }

  compareClasses(classesToCompare: DOMTokenList, classes: string[]): boolean {
    const compareArr = [];
    _.forEach(classesToCompare, menuClass => {
      compareArr.push(menuClass);
    });

    const isTheSame = _.isEqual(_.sortBy(compareArr), _.sortBy(classes));
    return isTheSame;
  }

  smoothScroll(e, element: string) {
    if (e) { e.preventDefault(); }
    const sectionToScrollTo = document.querySelector(`#${element}`);

    sectionToScrollTo.scrollIntoView({
      behavior: 'smooth'
    });
  }

  stripAndReplaceSpaces(path: string): string {
    const pathReplaceMultipleSpaces = path.replace(/\s\s+/g, ' ');
    const pathCleanUpEndSpaces = pathReplaceMultipleSpaces.replace(/\s+$/, '');
    const pathReplaceSpaces = pathCleanUpEndSpaces
        .replace(/\s+/g, '-')
        .toLowerCase();

    return pathReplaceSpaces;
  }

  setStyles(el: HTMLElement, styles: any[]) {
    styles.forEach(style => {
      el.style[style.key] = style.value;
    });
  }

  addClasses(el: HTMLElement, classes: string[] | string) {
    const mainClass = _.isArray(classes) ? classes : [classes];
    _.each(mainClass, cssClass => {
      if (!el.classList.contains(cssClass)) {
        el.classList.add(cssClass);
      }
    });
  }

  removeClasses(el: HTMLElement, classes: string[] | string) {
    const mainClass = _.isArray(classes) ? classes : [classes];
    _.each(mainClass, cssClass => {
      if (el.classList.contains(cssClass)) {
        el.classList.remove(cssClass);
      }
    });
  }
}
