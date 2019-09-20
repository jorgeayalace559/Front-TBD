<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand :to="{name: 'home'}">TBD</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'emergencias'}">Emergencias</b-nav-item>
              <b-dropdown :to="{name: 'tareas'}" text="tareas">
                <b-dropdown-item href="#">Tareas propuestas</b-dropdown-item>
                <b-dropdown-item href="#">Mis tareas</b-dropdown-item>
                <b-dropdown-item href="#">Crear Tarea</b-dropdown-item>
              </b-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  User
                </template>
                
                <b-dropdown-item href="#">Mi Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Mis Tareas</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <!-- Right aligned nav items -->

          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
</template>