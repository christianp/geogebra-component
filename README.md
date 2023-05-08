# geogebra-component.js

A web component to embed a GeoGebra applet.

It's a wrapper around `deployggb.js` provided by GeoGebra.

## Usage

### Construct a worksheet from scratch

Write GeoGebra commands inside the tag.
These commands are evaluated immediately after the applet loads.

```
<geogebra-applet>
  A = (1,2)
</geogebra-applet>
```

### Load a worksheet from GeoGebra.org by ID

```
<geogebra-applet material="sA5Mb4vd" />
<geogebra-applet material="https://www.geogebra.org/m/sA5Mb4vd" />
```

You can give just the ID, or you can give the full URL of a geogebra material, because that's easier to think about!

### Documentation

There's [a full API reference](reference.html) and [a page of examples](index.html).
