fixiframe
=========

Redimensionne proportionnellement une iframe sur la largeur de son conteneur.

**Dans cette documentation**

1. [Utilisation](#utilisation)
2. [Options](#options)

## Utilisation

```javascript
$('div.mycustomclass iframe').fixiframe ();
```

Exemple avec [responsiveResize](https://github.com/ruiadr/responsiveResize)

```javascript
$(window).responsiveResize ({
    callback: function (resizing) {
        if (!resizing) {
            $('div.mycustomclass iframe').fixiframe ();
        }
    } // callback ();
});
```

## Options

```javascript
$('div.mycustomclass iframe').fixiframe ({
    maxWidth: null // Largeur maximale à ne pas dépasser.
});
```
