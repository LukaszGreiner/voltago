<script setup>
import BurgerBtn from "../components/utils/BurgerBtn.vue";
import Btn from "../components/utils/Btn.vue";
import Checkbox from "../components/utils/Checkbox.vue";
import ToggleSwitch from "../components/utils/ToggleSwitch.vue";
import RadioInput from "../components/utils/RadioInput.vue";
import ScooterCard from "../components/Models/ScooterCard.vue";
import ScooterCard2 from "../components/Shopping/ScooterCard2.vue";
import SummaryCard from "../components/Shopping/SummaryCard.vue";
import ScooterComparison from "../components/Models/ScootersComparison.vue";
import ToggleCard from "../components/Shopping/ToggleCard.vue";
import ShoppingWizard from "../components/Shopping/ShoppingWizard.vue";
import OptionCardContainer from "../components/Shopping/OptionCardContainer.vue";
import OptionCard from "../components/Shopping/OptionCard.vue";
import TermsAndConditions from "../components/Shopping/TermsAndConditions.vue";
</script>
<template>
  <div class="flex flex-col items-center p-4 h-full bg-slate-400 gap-4">
    <h1 class="text-3xl font-bold">Testing Components</h1>
    <nav>
      <h2 class="text-center mb-2">Navigation</h2>
      <menu class="flex bg-tlo-jasne gap-10 px-4 font-bold divide-x-4">
        <li><a class="hover:underline" href="#buttons">buttons</a></li>
        <li><a href="#inputs">inputs</a></li>
        <li><a href="#cards">cards</a></li>
        <li><a href="#other">other</a></li>
      </menu>
    </nav>

    <!-- BUTTONS -->
    <h2 class="bg-tlo-jasne w-full text-center font-bold text-2xl my-10">
      Buttons
    </h2>
    <h3 class="mr-auto font-bold text-xl">BurgerBtn</h3>

    <BurgerBtn :isOpen="false" />
    <p>:isOpen="false" - default</p>

    <BurgerBtn :isOpen="true" />
    <p>:isOpen="true"</p>

    <h3 class="mr-auto font-bold text-xl">Btn</h3>
    <Btn />
    <!-- Primary is default btnType -->
    <Btn btnType="primary">Zaloguj się</Btn>
    <p>btnType="primary" - default</p>

    <Btn btnType="secondary">Zaloguj się</Btn>
    <p>btnType="secondary"</p>

    <Btn arrowRight="after">Przejdź dalej</Btn>
    <p>arrowRight="after"</p>

    <Btn arrowRight="after" :disabled="true">Przejdź dalej</Btn>
    <p>arrowRight="after" :disabled="true"</p>

    <Btn btnType="secondary" arrowLeft="before">Przejdź dalej</Btn>
    <p>btnType="secondary" arrowLeft="before"</p>

    <Btn btnType="tertiary">Senden Sie den Code erneut</Btn>
    <p>btnType="tertiary"</p>

    <Btn btnType="tertiary" :disabled="true">Senden Sie den Code erneut</Btn>
    <p>btnType="tertiary" :disabled="true"</p>

    <Btn btnType="tertiary" arrowUp="after">Einzelheiten</Btn>
    <p>btnType="tertiary" arrowUp="after"</p>
    <Btn btnType="tertiary" arrowDown="after">Zusammenbruch</Btn>
    <p>btnType="tertiary" arrowDown="after"</p>

    <!-- INPUTS -->
    <h2
      id="inputs"
      class="bg-tlo-jasne w-full text-center font-bold text-2xl my-10"
    >
      Inputs
    </h2>
    <h3 class="mr-auto font-bold text-xl">Checkbox</h3>

    <Checkbox :checked="false" />
    <p>default</p>

    <Checkbox :checked="true" />
    <p>::checked="true"</p>

    <h3 class="mr-auto font-bold text-xl">RadioInput</h3>
    <RadioInput name="group1" />
    <RadioInput name="group1" checked="checked" />
    <p>checked="checked"</p>

    <h3 class="mr-auto font-bold text-xl">ToggleSwitch</h3>

    <ToggleSwitch />
    <p>default</p>
    <ToggleSwitch :checked="true" />

    <!-- CARDS -->
    <h2
      id="cards"
      class="bg-tlo-jasne w-full text-center font-bold text-2xl my-10"
    >
      Cards
    </h2>
    <h3 class="mr-auto font-bold text-xl">ScooterCard</h3>
    <ScooterCard
      name="Elektro-Roller"
      model="ZX-500"
      src="src/assets/img/scooter-small-1.png"
      alt="ZX-500 electric scooter"
    />
    <p>
      name="Elektro-Roller" model="ZX-500"<br />
      src="src/assets/img/scooter-small-1.png"<br />
      alt="ZX-500 electric scooter"
    </p>
    <ScooterCard
      name="Elektro-Roller"
      model="DJ03-V55"
      src="src/assets/img/scooter-small-2.png"
      alt="DJ03-V55 electric scooter"
      quote="BVB und Arminia Fans schätzen ihn sehr!"
    />
    <p>
      name="Elektro-Roller"<br />
      model="DJ03-V55"<br />
      src="src/assets/img/scooter-small-2.png"<br />
      alt="DJ03-V55 electric scooter"<br />
      quote="BVB und Arminia Fans schätzen ihn sehr!"
    </p>
    <h3 class="mr-auto font-bold text-xl">ScooterCard2</h3>
    <ScooterCard2
      name="Elektro-Roller"
      model="ZX-500"
      src="src/assets/img/scooter-small-1.png"
      priceWithAssembly="1 599"
      priceWithoutAssembly="1 665"
    />
    <p>
      name="Elektro-Roller"<br />
      model="ZX-500"<br />
      src="src/assets/img/scooter-small-1.png"
    </p>
    <ScooterCard2
      name="Elektro-Roller"
      model="DJO3-V55"
      src="src/assets/img/scooter-small-2.png"
      priceWithAssembly="1 900"
      priceWithoutAssembly="1 999"
    />
    <p>
      name="Elektro-Roller" <br />
      model="DJO3-V55"<br />
      src="src/assets/img/scooter-small-2.png"
    </p>
    <h3 class="mr-auto font-bold text-xl">SummaryCard</h3>
    <SummaryCard />
    <p>TODO</p>

    <h3 class="mr-auto font-bold text-xl">ToggleCard</h3>
    <ToggleCard
      name="BE – Batterie-Erweiterung"
      minPrice="699"
      accordionText="lorem ipsum dolor sit ament"
      priceWithAssembly="699"
      priceWithoutAssembly="714"
    />
    <p>
      name="BE – Batterie-Erweiterung"<br />
      minPrice="699"<br />
      accordionText="lorem ipsum dolor sit ament"<br />
      priceWithAssembly="699"<br />
      priceWithoutAssembly="714"<br />
    </p>
    <ToggleCard
      name="BE – Batterie-Erweiterung"
      minPrice="699"
      :checked="true"
      accordionText="lorem ipsum dolor sit ament"
      :accordionOpen="true"
      priceWithAssembly="699"
      priceWithoutAssembly="714"
      optionSelected="2"
    />
    <p>
      name="BE – Batterie-Erweiterung"<br />
      minPrice="699"<br />
      :checked="true" <br />
      accordionText="lorem ipsum dolor sit ament"<br />
      :accordionOpen="true"<br />
      priceWithAssembly="699"<br />
      priceWithoutAssembly="714"<br />
      optionSelected="2"
    </p>

    <h3 class="mr-auto font-bold text-xl">
      OptionCard nested inside OptionCardContainer
    </h3>
    <OptionCardContainer title="Art der Zustellung">
      <OptionCard
        option="Persönliche Abholung im Lager"
        icon="garage-icon"
        lowerText="Theaterstrasse 22, 53111 Bonn"
      />
      <OptionCard
        option="Lieferung an die angegebene Adresse"
        icon="home-icon"
        additionalCost="100"
      />
    </OptionCardContainer>
    <p>
      [OptionCardContainer]<br />title="Art der Zustellung"<br /><br />
      [OptionCard]<br />option="Persönliche Abholung im Lager"<br />icon="garage-icon"<br />lowerText="Theaterstrasse
      22, 53111 Bonn"<br /><br />
      [OptionCard]<br />option="Lieferung an die angegebene Adresse"<br />icon="home-icon"<br />additionalCost="100"
    </p>

    <!-- OTHER -->
    <h2
      id="other"
      class="bg-tlo-jasne w-full text-center font-bold text-2xl my-10"
    >
      Other
    </h2>
    <h3 class="mr-auto font-bold text-xl">ShoppingWizard</h3>

    <ShoppingWizard currentStep="1" />
    <p>currentStep="1"</p>
    <ShoppingWizard currentStep="2" />
    <ShoppingWizard currentStep="3" />
    <ShoppingWizard currentStep="4" />

    <h3 class="mr-auto font-bold text-xl">SummaryDetails</h3>

    SummaryDetails

    <h3 class="mr-auto font-bold text-xl">TermsAndConditions</h3>
    <TermsAndConditions />
    <!-- END -->
  </div>
</template>
<style scoped>
p {
  color: black;
}
</style>
