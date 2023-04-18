# Notification React Component

This component renders a notification that shows up in the center, coming from the top of the website.

## Setup

```javascript
import Notification from 'notification-by-blizot'
```

In order to use the component, you must feed it two props:
* `message`: the notification's message
* `id`: so the notification element can be selected with the id: `<id>-notification`

## Display

Select the element by its id, add the class `visible` to it.

Here's how to do have the message displayed for 1 second:
```javascript
const notification = document.getElementById('<id>-notification')
notification.classList.add('visible')
setTimeout(() => {
  notification.classList.remove('visible')
}, 1000)
```

## Styling

You can use the `notification` class to change its background color, its text's color, weight, font size, and more...
