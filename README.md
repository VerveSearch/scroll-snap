# scroll-snap

The plugin that triggers the classToogle on element, which stick and element to fixed position or brings it back to normal flow.
 
## Dependencies and Libraries 

1. jquery.min.js

## Usage

To instantiate the plugin, call a ScrollSnap() on an element that needs to be sticked.
You can specify the className that needs to be toggled and element triggerHide that triggers the classToogle.


```javascript

$(document).ready(function(){ 
	$('.button').ScrollSnap({
		className : 'fixed', 
		triggerHide: $('.slide-3')
		});
},jQuery);



```