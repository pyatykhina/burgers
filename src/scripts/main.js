import { slider } from './sections/3.js';
import { verticalAccordeon } from './sections/4.js';
import { horizontalAccordeon } from './sections/5.js';
import { init } from './sections/8.js';

import { onePageScroll } from './navigation.js';

slider();

verticalAccordeon();
horizontalAccordeon();

ymaps.ready(init);

onePageScroll();
