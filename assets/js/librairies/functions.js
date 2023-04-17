export const WhatsappWebObject =  {
  //Fonction pour afficher le sidebar_1-settings_dropdown
  toggleSettingsDropdown: () =>{
        var dotsIcon = document.querySelector('.bi-three-dots-vertical');
        var settingsDropdown = document.querySelector('.sidebar_1-settings_dropdown');
        
        dotsIcon.addEventListener('click', function() {
          if (settingsDropdown.style.display === 'none') {
            settingsDropdown.style.display = 'block';
          } else {
            settingsDropdown.style.display = 'none';
          }
        });
        
        document.addEventListener('click', function(event) {
          if (event.target !== dotsIcon) {
            settingsDropdown.style.display = 'none';
          }
        });
  },

  //Fonction pour afficher le chat-settings-dropdown
  toggleChatSettingsDropdown: () =>{
        var settingsIcon = document.getElementById('chat-setting-icon');
        var settingsDropdown = document.querySelector('.chat-settings-dropdown');
        
        settingsIcon.addEventListener('click', function() {
          if (settingsDropdown.style.display === 'none') {
            settingsDropdown.style.display = 'block';
          } else {
            settingsDropdown.style.display = 'none';
          }
        });
        
        document.addEventListener('click', function(event) {
          if (event.target !== settingsIcon) {
            settingsDropdown.style.display = 'none';
          }
        });
  },

  //Fonction pour afficher le sidebar_2
  toggleSidebar2: () =>{
    const sidebar1HeaderProfile = document.querySelector('.sidebar_1_header_profile img');
    const sidebar2 = document.querySelector('.sidebar_2');
    const arrowLeft = document.querySelector('.sidebar_2_header .bi-arrow-left');
    
    sidebar1HeaderProfile.addEventListener('click', () => {
      sidebar2.style.animation = 'slide-in 2s forwards';
      sidebar2.style.display = "block";
    });
    
    arrowLeft.addEventListener('click', () => {
      sidebar2.style.animation = 'slide-out 2s forwards';
      setTimeout(() => sidebar2.style.display = 'none', 2000);
    });
    
    
  }, 

  //Fonction pour afficher le sidebar_3
  toggleSidebar3: () =>{
        const biCircle = document.querySelector('.bi-circle');
        const biArrowLeft = document.querySelector('.sidebar_3_header .bi-arrow-left');
        const sidebar3 = document.querySelector('.sidebar_3');
        
        biCircle.addEventListener('click', () => {
          sidebar3.style.animation = 'slide-in 2s forwards';
          sidebar3.style.display = 'block';
        });
        
        biArrowLeft.addEventListener('click', () => {
          sidebar3.style.animation = 'slide-out 2s forwards';
          setTimeout(() => sidebar3.style.display = 'none', 2000);
        }); 
  },  
  
  //Fonction pour afficher le sidebar_4
  toggleSidebar4: () =>{
      const sidebar4 = document.querySelector('.sidebar_4');
      const msgImportant = document.querySelector('.msg-important');
      const biChatLeftText = document.querySelector('.bi-chat-left-text');
      const biArrowLeft = document.querySelector('.sidebar_4_header .bi-arrow-left');
      
      // Fonction pour afficher la sidebar 4
      function afficherSidebar4() {
        sidebar4.style.animation = 'slide-in 2s forwards';
        sidebar4.style.display = 'block';
      }
      
      // Fonction pour cacher la sidebar 4
      function cacherSidebar4() {
        sidebar4.style.animation = 'slide-out 2s forwards';
          setTimeout(() => sidebar4.style.display = 'none', 2000);
      }
      
      // Écouteurs d'événements pour les clics sur les éléments de la page
      msgImportant.addEventListener('click', afficherSidebar4);
      
      biChatLeftText.addEventListener('click', afficherSidebar4);
      
      biArrowLeft.addEventListener('click', cacherSidebar4);
      
      
  },

  //Fonction pour afficher le sidebar_5
  toggleSidebar5: () =>{
    const parametres = document.querySelector('.parametres');
    const sidebar5 = document.querySelector('.sidebar_5');
    const biArrowLeft = document.querySelector('.sidebar_5_header .bi-arrow-left');
    
    // Événement lorsqu'on clique sur l'élément de classe "parametres"
    parametres.addEventListener('click', () => {
      sidebar5.style.animation = 'slide-in 2s forwards';
      sidebar5.style.display = 'block';
    });
    
    // Événement lorsqu'on clique sur l'élément de classe "bi-arrow-left"
    biArrowLeft.addEventListener('click', () => {
      sidebar5.style.animation = 'slide-out 2s forwards';
      setTimeout(() => sidebar5.style.display = 'none', 2000);
    });  
  }, 
  //Fonction pour afficher le sidebar_5
  togglePageDeconnexion: () =>{
    const deconnexion = document.querySelector('.deconnexion');
    const pageDeconnexion = document.querySelector('.page_deconnexion');
    const btnAnnuler = document.querySelector('.page_deconnexion .btn_annule');
     
    // Événement lorsqu'on clique sur l'élément de classe "deconnexion"
    deconnexion.addEventListener("click", () => {
      pageDeconnexion.style.display = "block";
    });

    // Événement lorsqu'on clique sur l'élément de classe "btn annuler"
    btnAnnuler.addEventListener("click", () => {
      pageDeconnexion.style.display = "none";
    });
  }, 

  
 
}









  
  
  




    


  
  


  