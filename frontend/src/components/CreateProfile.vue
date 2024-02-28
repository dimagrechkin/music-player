<template>
    <div class="container">
      <div class="form-container">
        <div class="input-container">
          <input
            v-model="text"
            type="text"
            placeholder="Handle"
          >
        </div>
       
        <div
          class="input-container white center"
          @click="onPost"
        >
          Create Profile
        </div>
        <div
          v-if="validationError"
          class="white"
        >
          please fill every field
        </div>
      </div>
    </div>
  </template>
    
    <script setup lang="ts">
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
  
    import { useCryptoStore } from '@/stores/crypto';
    import { profileCreationContract } from '@/utils/mock-profile-creation';
    
    const text = ref('');
    const validationError = ref(false);
    const cryptoStore = useCryptoStore();
    const { account } = storeToRefs(cryptoStore);
    
    const onPost = async () => {
      validationError.value = false;
      if (text.value ) {  
        await profileCreationContract.proxyCreateProfile({
          to: account.value,
          handle: text.value,
          imageURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtvjgvsoRFzKQWYiNXORgDlcTuy54jnAN8Y9mVRRw2Q&s",
          followNFTURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtvjgvsoRFzKQWYiNXORgDlcTuy54jnAN8Y9mVRRw2Q&s",
          followModule: "0x0000000000000000000000000000000000000000",
          followModuleInitData: "0x00",
        });
      } else {
        validationError.value = true;
      }
    };
    </script>
    
    <style>
    .white {
      color: white;
    }
    
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .form-container {
      max-width: 800px;
    }
    
    .input-container {
      width: 100%;
      padding: 16px;
      margin: 16px;
      border-radius: 16px;
      border: 1px solid white;
    }
    
    .center {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    </style>
    