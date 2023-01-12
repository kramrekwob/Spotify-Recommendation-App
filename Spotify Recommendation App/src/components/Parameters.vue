  <template>
  <form class="container" action="" method="" id="mainform">
    <div class="row">
      <label for="dance" class="form-label col-3 border text-center mt-2">Danceability</label>
      <input name="danceability" id="danceability" type="range" class="form-range col-7 parameter" min="0" max="1"
        step=".01"><span></span>
    </div>
    <div class="row">
      <label for="liveness" class="form-label col-3 border text-center mt-2">Liveness</label>
      <input name="liveness" id="liveness" type="range" class="form-range col-7 parameter" min="0" max="1"
        step=".01"><span></span>
    </div>
    <div class="row">
      <label for="dance" class="form-label col-3 border text-center mt-2">Loudness</label>
      <input name="loudness" id="loudness" type="range" class="form-range col-7 parameter" min="0" max="1"
        step=".01"><span></span>
    </div>
    <div class="row">
      <label for="tempo" class="form-label col-3 border text-center mt-2">Tempo</label>
      <input name="tempo" id="tempo" type="range" class="form-range col-7 parameter" min="0" max="1" step=".01">
      <span></span>
    </div>
    <div class="row">
      <label for="popularity" class="form-label col-3 border text-center mt-2">Popularity</label>
      <input name="popularity" id="popularity" type="range" class="form-range col-7 parameter" min="0" max="100" step="0.01">
      <span id="popdisplay"></span>
    </div>
    </form>
    </template>