<template>
  <!-- Call To Action Section -->
  <section class="w-full bg-red text-white py-20" ref="ctaSection">
    <div id="cta-call-section" class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
      <!-- Telephone Icon (Left) -->
      <div class="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
        <img
          ref="phoneImg"
          src="@/assets/icons/telephone.svg"
          alt="Telephone"
          class="w-32 h-32 md:w-40 md:h-40 cursor-pointer"
          style="will-change: transform;"
          tabindex="0"
        />
        <audio ref="phoneAudio" :src="phoneRinging" preload="auto"></audio>
      </div>
      <!-- Content (Right) -->
      <div class="flex-1 text-left">
        <h2 class="text-3xl md:text-[36px] font-primary font-bold mb-3 text-white">Let’s Build Your Digital Success Story</h2>
        <p class="mb-6 max-w-xl text-white">
          Whether you're launching an eCommerce platform, upgrading your CRM, scaling with SaaS solutions, or driving digital transformation — Auraveni Solutions is your trusted technology partner. Call us at 
          <a href="tel:+913335448771" class="font-semibold hover:text-[#F4B400]">033 3544 8771</a> or 
          <a href="tel:+919804525831" class="font-semibold hover:text-[#F4B400]">098045 25831</a>, 
          or click below to get started. Let’s build something powerful together.
        </p>
        <button class="inline-block px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition-colors duration-200 uppercase" type="button" @click="openEnquiry">
          Get Started Now
        </button>
      </div>
    </div>
  </section>

  <!-- Enquiry Form Drawer -->
  <div
    id="enquiry-drawer"
    class="fixed bottom-0 right-0 w-full max-w-md bg-white text-dark shadow-2xl rounded-tl-2xl z-[9999] transition-transform duration-300"
    :class="{ 'translate-y-full': !showEnquiry }"
    style="box-shadow: 0 -8px 32px rgba(0,0,0,0.18);"
  >
    <div class="flex justify-between items-center px-6 py-4 border-b">
      <h3 class="text-2xl font-primary font-bold">Connect With Us</h3>
      <button class="text-2xl font-bold text-black hover-text-red focus:outline-none" aria-label="Close" @click="closeEnquiry">&times;</button>
    </div>
    <form class="px-6 py-6 space-y-4" id="enquiry-form" autocomplete="off" @submit.prevent="handleFormSubmit">
      <div>
        <input id="enquiry-name" name="fullName" type="text" required placeholder="Full Name *"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          v-model="form.fullName"
        />
      </div>
      <div>
        <input id="enquiry-email" name="email" type="email" required placeholder="Email *"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          v-model="form.email"
        />
      </div>
      <div>
        <input id="appointment-mobile" name="mobile" type="tel" required placeholder="Mobile *"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          style="width:100% !important;"
          v-model="form.mobile"
          inputmode="numeric" pattern="[0-9]*"
          @input="e => { const t = e.target as HTMLInputElement; if (t) { t.value = t.value.replace(/[^0-9]/g, ''); form.mobile = t.value; } }"
        />
      </div>
      <div>
        <input id="enquiry-company" name="company" type="text" required placeholder="Company Name *"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          v-model="form.company"
        />
      </div>
      <div>
        <input id="enquiry-website" name="website" type="url" placeholder="Website URL (https://www.example.com)"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          v-model="form.website"
        />
      </div>
      <div>
        <select id="enquiry-services" name="service" required
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none"
          v-model="form.service"
        >
          <option value="" disabled selected>Select Services *</option>
          <option>Branding & Design</option>
          <option>System Design</option>
          <option>Website Design & Development</option>
          <option>Web Application Development</option>
          <option>eCommerce Development</option>
          <option>Mobile App Development</option>
          <option>Custom CRM Development</option>
          <option>Digital Marketing</option>
          <option>API Development</option>
          <option>AI & ML Solutions</option>
          <option>Amazon AWS and Cloud Services</option>
          <option>Business Process Management</option>
        </select>
      </div>
      <div>
        <textarea id="enquiry-message" name="message" rows="3" required placeholder="Type your message here *"
          class="w-full bg-transparent border-b border-gray-800 text-dark placeholder-gray-500 py-2 focus:outline-none resize-none"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="flex items-start gap-2 text-sm">
        <input id="enquiry-privacy" name="policy" type="checkbox" required class="mt-1 border-white accent-gray-200"
          v-model="form.policy"
        />
        <label for="enquiry-privacy">I agree to the <a href="#" class="font-semibold underline" target="_blank">Privacy Policy</a> and consent to receiving newsletters.</label>
      </div>
      <button type="submit" class="px-6 py-2 bg-red text-white hover-bg-green uppercase rounded shadow transition w-max" :disabled="loading">
        <span v-if="loading">Submitting...</span>
        <span v-else>Submit</span>
      </button>
      <div v-if="successMsg" class="text-green text-center font-semibold mt-2">{{ successMsg }}</div>
      <div v-if="errorMsg" class="text-red text-center font-semibold mt-2">{{ errorMsg }}</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';

// Add type for intlTelInputUtils
declare global {
  interface Window {
    intlTelInput?: any;
    intlTelInputUtils?: any;
  }
}
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import phoneRinging from '@/assets/audio/phone-ringing.mp3';

// Form state
const form = ref({
  fullName: '',
  email: '',
  mobile: '',
  company: '',
  website: '',
  service: '',
  message: '',
  policy: false,
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const showEnquiry = ref(false);
const ctaSection = ref<HTMLElement | null>(null);
const phoneImg = ref<HTMLImageElement | null>(null);
const phoneAudio = ref<HTMLAudioElement | null>(null);

// intl-tel-input logic for Appointment form
declare global {
  interface Window {
    intlTelInput?: any;
  }
}

function loadIntlTelInputScript() {
  return new Promise<void>((resolve, reject) => {
    if (window.intlTelInput) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/intlTelInput.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

onMounted(async () => {
  await loadIntlTelInputScript();
  const input = document.getElementById('appointment-mobile');
  if (input && window.intlTelInput) {
    window.intlTelInput(input, {
      initialCountry: 'in',
      nationalMode: true, // Show only national number in input
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
    });
    // Set initial maxlength for India
    input.setAttribute('maxlength', '10');
    // Listen for country change to update maxlength
    input.addEventListener('countrychange', () => {
      const iti = window.intlTelInputGlobals.getInstance(input);
      if (iti) {
        const countryData = iti.getSelectedCountryData();
        let maxLen = '';
        // Use metadata for national number length if available
        if (countryData.iso2 === 'in') {
          maxLen = '10';
        } else if (countryData && countryData.dialCode) {
          // Try to get example number length from intl-tel-input utils
          if (window.intlTelInputUtils && window.intlTelInputUtils.getExampleNumber) {
            try {
              const example = window.intlTelInputUtils.getExampleNumber(countryData.iso2, true, window.intlTelInputUtils.numberType.MOBILE);
              if (example) {
                maxLen = example.replace(/\D/g, '').length.toString();
              }
            } catch (e) {}
          }
        }
        if (maxLen) {
          input.setAttribute('maxlength', maxLen);
        } else {
          input.removeAttribute('maxlength');
        }
      }
    });
  }
});

// Open/close logic
function openEnquiry() {
  showEnquiry.value = true;
  // Play phone audio when opening enquiry
  if (phoneAudio.value) {
    phoneAudio.value.currentTime = 0;
    phoneAudio.value.load();
    phoneAudio.value.play().catch((err) => {
      // eslint-disable-next-line no-console
      console.warn('Phone audio play failed:', err);
    });
  }
  nextTick(() => {
    const input = document.getElementById('enquiry-name') as HTMLInputElement;
    input?.focus();
  });
}
function closeEnquiry() {
  showEnquiry.value = false;
}

// API call logic
const successMsg = ref('');
const errorMsg = ref('');

async function handleFormSubmit() {
  successMsg.value = '';
  errorMsg.value = '';
  if (!form.value.policy) {
    errorMsg.value = 'You must agree to the Privacy Policy.';
    return;
  }
  // Validate mobile number using intl-tel-input for international format, but validate length on user input only
  const phoneInput = document.getElementById('appointment-mobile');
  let iti = null;
  let internationalNumber = '';
  if (phoneInput && window.intlTelInput) {
    iti = window.intlTelInputGlobals.getInstance(phoneInput);
    if (iti) {
      if (!iti.isValidNumber()) {
        errorMsg.value = 'Please enter a valid mobile number.';
        return;
      }
      internationalNumber = iti.getNumber();
      // Enforce length for selected country using the value as entered by the user
      const userInput = (phoneInput as HTMLInputElement).value;
      const countryData = iti.getSelectedCountryData();
      let expectedLen = '';
      if (countryData.iso2 === 'in') {
        expectedLen = '10';
      } else if (countryData && countryData.dialCode) {
        if (window.intlTelInputUtils && window.intlTelInputUtils.getExampleNumber) {
          try {
            const example = window.intlTelInputUtils.getExampleNumber(countryData.iso2, true, window.intlTelInputUtils.numberType.MOBILE);
            if (example) {
              expectedLen = example.replace(/\D/g, '').length.toString();
            }
          } catch (e) {}
        }
      }
      if (expectedLen) {
        if (userInput.length !== parseInt(expectedLen)) {
          errorMsg.value = `Mobile number must be exactly ${expectedLen} digits for the selected country.`;
          return;
        }
      }
      form.value.mobile = userInput;
    }
  }
  // Validate website URL (optional, but if present must be valid)
  if (form.value.website && !/^https?:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/.test(form.value.website)) {
    errorMsg.value = 'Please enter a valid website URL (e.g., https://www.example.com).';
    return;
  }
  loading.value = true;
  try {
    // Example API endpoint, replace with your actual endpoint
    const apiUrl = '/api/enquiry';
    // Prepare payload: send international number, but keep field as national
    const payload = { ...form.value, mobile: internationalNumber || form.value.mobile };
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Failed to submit. Please try again.');
    successMsg.value = 'Thank you! Your enquiry has been submitted.';
    // Store selected country data before reset
    let selectedCountryData = null;
    if (iti) {
      selectedCountryData = iti.getSelectedCountryData();
    }
    // Reset form
    form.value = {
      fullName: '',
      email: '',
      mobile: '',
      company: '',
      website: '',
      service: '',
      message: '',
      policy: false
    };
    // Reset intl-tel-input UI (flag color and country)
    if (phoneInput && window.intlTelInput && selectedCountryData) {
      setTimeout(() => {
        const itiReset = window.intlTelInputGlobals.getInstance(phoneInput);
        if (itiReset) {
          itiReset.setCountry(selectedCountryData.iso2);
          itiReset.setNumber('');
        }
      }, 0);
    }
    setTimeout(() => {
      closeEnquiry();
      successMsg.value = '';
    }, 2000);
  } catch (err) {
    errorMsg.value = (err instanceof Error ? err.message : 'Submission failed.');
  } finally {
    loading.value = false;
  }
}

// GSAP phone shake animation

onMounted(() => {
  
  setTimeout(()=>{
     nextTick(() => {
    console.log('[Appointment] onMounted fired')
    if (phoneImg.value) {
      console.log('[Appointment] phoneImg found:', phoneImg.value);
      let shakeTween: any = null;
      gsap.set(phoneImg.value, { rotate: 0 });
      ScrollTrigger.create({
        trigger: phoneImg.value,
        markers: false,
        onEnter: () => {
          console.log("On section enter");
          
          if (!shakeTween) {
            console.log('[Appointment] GSAP shake started (onEnter)');
            shakeTween = gsap.to(phoneImg.value, {
              keyframes: [
                { rotate: -15, duration: 0.1 },
                { rotate: 15, duration: 0.1 },
                { rotate: -10, duration: 0.1 },
                { rotate: 10, duration: 0.1 },
                { rotate: 0, duration: 0.1 }
              ],
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            });
          }
        },
        onEnterBack: () => {
          if (!shakeTween) {
            console.log('[Appointment] GSAP shake started (onEnterBack)');
            shakeTween = gsap.to(phoneImg.value, {
              keyframes: [
                { rotate: -15, duration: 0.1 },
                { rotate: 15, duration: 0.1 },
                { rotate: -10, duration: 0.1 },
                { rotate: 10, duration: 0.1 },
                { rotate: 0, duration: 0.1 }
              ],
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            });
          }
        },
        onLeave: () => {
          if (shakeTween) {
            console.log('[Appointment] GSAP shake stopped (onLeave)');
            shakeTween.kill();
            shakeTween = null;
            gsap.set(phoneImg.value, { rotate: 0 });
          }
        },
        onLeaveBack: () => {
          if (shakeTween) {
            console.log('[Appointment] GSAP shake stopped (onLeaveBack)');
            shakeTween.kill();
            shakeTween = null;
            gsap.set(phoneImg.value, { rotate: 0 });
          }
        }
      });
    } else {
      console.warn('[Appointment] phoneImg NOT found');
    }
  });
  }, 500)
 
});
</script>
