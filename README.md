The TransferLab TeXmacs style

This plugin contains a *very* simple Tufte-like TeXmacs package in use at 
[appliedAI's Transferlab](https://transferlab.appliedai.de).

# Installation

Clone this repository into `$TEXMACS_HOME_PATH/plugins` as `transferlab`. For 
Linux and MacOS this path is typically `~/.TeXmacs/plugins`:

```shell
git clone https://github.com/texmacs/transferlab.git 
~/.TeXmacs/plugins/transferlab
```


For Windows, the path (usually?) is

```shell
\Users\YourUser\AppData\Roaming\TeXmacs\plugins
```

# Usage

After installation, use `Document -> Style -> Add package` to add the package 
`Transferlab -> aai-tfl` to your document. There is also a new menu item in 
`Insert -> Notes -> Unnumbered note`.

**Warning:** Cursor navigation is broken (but usable), see below.

# Features

  * A style with large alternating margins intended for usage with marginal 
  notes. The page size is hardcoded to A4. All pages have 25mm margins at both 
  side. Odd pages have an additional 75mm to the right and even pages to the 
  left. This extra space is used by marginal notes.
  * Macros and accompanying scheme code for numbered marginal notes. When using 
  the package, `marginal-note` is numbered and `marginal-note*` unnumbered. 
  They are variants from each other so it is possible to switch easily.
  * A `wide-figure` macro extending beyond the body of the text to occupy the 
  full width of the page, minus the exterior margins.

# Known issues

  * Cursor navigation is mostly broken for the new markup. It is necessary to 
  deactivate the tags by positioning the cursor to their right and pressing 
  backspace.
  * `wide-figure` uses an ugly hack with the undocumented `vphantom` and 
  `<specific|odd|>`, `<specific|even|>` in order to move the figure to the left 
  in even pages to center it absolutely in the document.
  I haven't found a way of using `move` with different magnitudes depending 
  either on the page number (which is not available during typesetting) or on 
  the distance to the side of the page. Recall that, during the evaluation of 
  delta-x and delta-y in `<move|content|delta-x|delta-y>`, the box lengths `w`, 
  `h`, `l`, `r`, `b` and `t` of content are defined. So one could think of 
  using `<if|<greater|outer-margin|1l>|<move|wide figure here||some distance 
  to the left>>`, but it seems like the box lengths are not available inside 
  the conditional.
  * `marginal-note` and `marginal-note*` should use the standard way of 
  switching between them with `Focus -> Numbered`.
  * Probably more.

# License

Use at your own risk.
