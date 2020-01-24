**Event Bubbling**
* The event is first captured and handled by the innermost element and then propagated to outer elements.
* Events that are bubbling upward through the tree will not trigger a listener designated to use capture..
 Event bubbling and capturing are two ways of propagating events which occur in an element that is nested within another element

**Event Capturing**
* The event is first captured by the outermost element and propagated to the inner elements.
* Capturing is also called "trickling".
* Event capturing is the event starts from top element to the target element.