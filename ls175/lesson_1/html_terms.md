Element: `<a>`
Tag: `<a>` and `</a>`
Content: the stuff in between the tags.
Attribute: `href=somewebsite.com` inside the opening tag after the element's name.
Self-closing elements: `<meta>`. Elements that only have an opening tag, i.e., no closing tag.

Selectors: can target an attribute value (ex: `id` or `class`), or target the type of element (ex: `<h1>` or `<p>`). Ex: `p` targets all `<p>` elements.
Properties: Come after a selectors are are inside curly braces. They are preceded by a colon `:`.
Values: text between the colon `:` and the semicolon `;`.
```CSS
p {
  color: orange;
  font-size: 16px;
}
```
Type selectors: targets specific elements. Ex: `div` selects all `<div>` elements.
Class selectors: select elements based on its `class` attribute. Ex: `.awesome` selects all elements that have the attribute `class="awesome"`.
ID selectors: select the element with a specific `id` value. `id` attribute values can only be used once per page. Ex: `#shayhowe` selects the element with the `id="shayhowe"` attribute.

BLock-level elements
Inline-level elements
`<div>`: block-level element
`<span>`: inline-level element
`<!-- this is a HTML comment -->`
`/* this is a CSS comment */`