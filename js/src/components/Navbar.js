export default {
  props: ["mirror", "connected"],

  template: `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="./icon.png" width="30" class="mr-3">
                <h6 class="ms-2 mb-0">Code Collaboration</h6>
            </a>
            
            <div v-show="!connected" class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            <div class="form-check form-switch">
                <label class="form-check-label text-white small">Collab It</label>
                <input class="form-check-input" type="checkbox" :checked="mirror" @click="$emit('toggle')">
            </div>
        </div>
    </nav>
    `,
};




