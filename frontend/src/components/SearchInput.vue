<template>
    <input
      ref="searchInputRef"
      v-model="searchValue"
      size="large"
      :maxlength="maxlength"
      :clearable="clearable"
      :placeholder="placeholder"
      @focus="focus"
      @focusout="focusOut"
      @input="handleInput"
    >
  </template>
  
  <script setup lang="ts">
  import { ref, toRefs } from 'vue';
  import { useVModel, useDebounceFn } from '@vueuse/core';
  
  interface Props {
    modelValue: string;
    useDebounce?: boolean;
    maxlength?: number;
    debounceTime?: number;
    placeholder?: string;
    clearable?: boolean;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    maxlength: 500,
    useDebounce: true,
    clearable: true,
    placeholder: 'Search',
    debounceTime: 500,
  });
  
  const { debounceTime, useDebounce } = toRefs(props);
  
  interface Emits {
    (event: 'update:modelValue', value: string): void;
  }
  const emit = defineEmits<Emits>();
  
  const searchValue = ref('');
  
  useVModel(props, 'modelValue', emit);
  
  const searchInputRef = ref<InstanceType<typeof HTMLInputElement>>();
  
  const isFocused = ref(false);
  
  const focus = (e) => {
    console.log(e, "e");
    
    if (searchInputRef.value === document.activeElement ) {
      isFocused.value = true;
    } 
  
    else {
      console.log(document.activeElement, 'document.activeElement');
      isFocused.value = false;
    }
  };
  
  const focusOut = (e) => {
    console.log(e, "e");
    
    if (searchInputRef.value === document.activeElement ) {
      isFocused.value = true;
    } 
  
      
    if(e.relatedTarget){
      // console.log(e.relatedTarget, 'e.relatedTarget');
      isFocused.value = true;
    }
  
    else {
      console.log(document.activeElement, 'document.activeElement');
      isFocused.value = false;
    }
  };
  defineExpose({
    searchInputRef,
    isFocused,
  });
  
  const onChange = (value: InputEvent) => {
    emit('update:modelValue', value?.target?.value);
  };
  
  const debouncedOnChange = useDebounceFn(onChange, debounceTime.value);
  
  const handleInput = (value: InputEvent) => (useDebounce.value ? debouncedOnChange(value) : onChange(value));
  </script>
  