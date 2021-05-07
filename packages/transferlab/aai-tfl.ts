<TeXmacs|1.99.20>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|aai-tfl|0.1>

    <\src-purpose>
      A bare-bones tufte-like style for appliedAI's TransferLab
    </src-purpose>

    <src-copyright|2021|Miguel de Benito Delgado>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <\active*>
    <\src-comment>
      Basic configuration variables and common defaults

      All pages have 25mm margins at both side. Odd pages have an additional
      75mm to the right and even pages to the left. This extra space is used
      by marginal notes.
    </src-comment>
  </active*>

  <assign|transferlab-logo|<macro|width|<image|local:$TEXMACS_HOME_PATH/plugins/transferlab/packages/transferlab/transferlab.eps|<arg|width>|||>>>

  \;

  <assign|info-flag|detailed>

  <assign|page-screen-margin|false>

  <assign|save-aux|false>

  <assign|page-medium|paper>

  <assign|page-type|a4>

  <assign|page-width-margin|true>

  <assign|par-width|110mm>

  <assign|page-odd-shift|-25mm>

  <assign|page-even-shift|25mm>

  <assign|page-bot|30mm>

  <assign|page-foot-sep|18mm>

  <assign|page-odd-footer|<move|<transferlab-logo|110pt>|400pt|>>

  <assign|font-base-size|11pt>

  <assign|math-font|math-dejavu>

  <\active*>
    <\src-comment>
      Numbered marginal notes
    </src-comment>
  </active*>

  <assign|marginal-note-sep|10mm>

  <assign|marginal-note-width|45mm>

  <assign|marginal-note-total|<plus|<value|marginal-note-width>|<value|marginal-note-sep>>>

  <new-counter|marginal-note> -- Probably should use add-to-counter-group
  std-env

  <assign|display-marginal-note|<macro|nr|<em|<rsup|<arg|nr>>>>> -- An
  unfortunate name...

  <assign|marginal-note|<macro|hpos|vpos|body|<surround|<inc-marginal-note><the-marginal-note>||<with|dummy1|<value|marginal-note-width>|dummy2|<value|marginal-note-sep>|<compound|<merge|marginal-|<arg|hpos>|-note>|<arg|vpos>|<the-marginal-note>
  <small|<arg|body>>|<arg|hpos>>>>>>

  <assign|marginal-note*|<macro|hpos|vpos|body|<with|dummy1|<value|marginal-note-width>|dummy2|<value|marginal-note-sep>|<compound|<merge|marginal-|<arg|hpos>|-note>|<arg|vpos>|<small|<arg|body>>|<arg|hpos>>>>>

  <drd-props|marginal-note*|arity|3|accessible|none>

  <\active*>
    <\src-comment>
      Redefinitions of standard markup to use the additional margin
    </src-comment>
  </active*>

  <assign|render-big-figure|<\macro|type|name|fig|cap>
    <surround|<marginal-note*|normal|b|<html-div-class|caption|<surround|<figure-name|<arg|name><figure-sep>><list-caption|<arg|type>|<arg|cap>>||<arg|cap>>>>||<center|<arg|fig>>>
  </macro>>

  <assign|doc-title|<macro|x|<\surround|<marginal-note*|normal|b|<shift|<transferlab-logo|180pt>|-5mm|2cm>>|<vspace|0.5fn>>
    <doc-title-block|<font-magnify|1.412|<with|font-family|ss|font-series|bold|<arg|x>>>>
  </surround>>>

  <\active*>
    <\src-comment>
      Wide figures taking all width up to the outer margins
    </src-comment>
  </active*>

  <assign|wide-figure-top-sep|1.2fn>

  <assign|wide-figure-bot-sep|1.3fn>

  <assign|wide-figure-width|<plus|<value|par-width>|<value|marginal-note-sep>|<value|marginal-note-width>>>

  <assign|wide-figure-inner|<\macro|body|caption>
    <\tabular>
      <tformat|<cwith|2|2|1|1|cell-tsep|0>|<cwith|2|2|1|1|cell-bsep|0>|<cwith|2|2|1|1|cell-hpart|0>|<cwith|2|2|1|1|cell-vmode|exact>|<cwith|2|2|1|1|cell-height|0.8em>|<cwith|3|3|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-halign|c>|<twith|table-lsep|0>|<twith|table-rsep|0>|<twith|table-tsep|<value|wide-figure-top-sep>>|<twith|table-bsep|<value|wide-figure-bot-sep>>|<twith|table-width|<value|wide-figure-width>>|<twith|table-hmode|exact>|<table|<row|<cell|<arg|body>>>|<row|<cell|>>|<row|<\cell>
        <html-div-class|caption|<surround|<figure-name|<figure-text>
        <the-figure><figure-sep>><list-caption|big-figure|<arg|caption>>||<small|<arg|caption>>>>
      </cell>>>>
    </tabular>
  </macro>>

  <assign|wide-figure-even|<\macro|body|caption>
    <move|<wide-figure-inner|<arg|body>|<arg|caption>>|<minus|<value|marginal-note-total>>|>
  </macro>>

  <assign|wide-figure-odd|<\macro|body|caption>
    <wide-figure-inner|<arg|body>|<arg|caption>>
  </macro>>

  <assign|wide-figure|<\macro|body|caption>
    <\surround|<no-indent><inc-figure>|>
      <specific|even|<wide-figure-even|<arg|body>|<arg|caption>>><specific|odd|<wide-figure-odd|<arg|body>|<arg|caption>>><vphantom|<wide-figure-inner|<arg|body>|<arg|caption>>>
    </surround>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|global-author|Miguel de Benito Delgado>
    <associate|global-subject|>
    <associate|global-title|Macros for the TransferLab>
    <associate|page-medium|paper>
    <associate|src-special|normal>
  </collection>
</initial>