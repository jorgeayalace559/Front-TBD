<template>
    <div>
        <b-navbar class="barra" toggleable="lg" type="light">
        <b-container>
          <b-navbar-brand :to="{name: 'home'}">TBD</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'emergencies'}">Emergencias</b-nav-item>
              <b-nav-item :to="{name: 'tareas'}">Tareas</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  User
                </template>
                
                <b-dropdown-item href="#">Mi Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <!-- Right aligned nav items -->

          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
</template>

<style>

.barra{
  background-color: #F7DC6F   !important;
  font-size: 30px;
  color:black;
}

</style>