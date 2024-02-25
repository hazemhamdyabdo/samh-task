<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  Calendar as CalendarIcon,
  Plane as PlaneIcon,
  ArrowRightLeft as ArrowRightLeftIcon,
} from "lucide-vue-next";
const { locale } = useI18n();

/**
 * @TODO: in future after validate the form and successful submit toast confirmation message for receving ticket
 *
 */
const destinations = ref([
  /**
   * here we can make every index object and name in arabic & english and based on locale access to the element
   * but here we have few indexes so we can easily put them in en and ar json
   */
  "New York City, USA",
  "London, UK",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Paris, France",
  "Rome, Italy",
  "Barcelona, Spain",
  "Bangkok, Thailand",
  "Cape Town, South Africa",
  "Dubai, UAE",
  "Riyadh, Saudi Arabia",
]);
// locale refs
const selectedDeparture = ref();
const selectedArrival = ref();
const departureDate = ref();
const returnDate = ref();
const formatDepartureDate = ref();
const formatReturnDate = ref();
// semulate for unavailable or booked up dates
const disabledDays = [
  new Date(2024, 2, 10),
  new Date(2024, 2, 12),
  new Date(2024, 2, 20),
];

/**
 * Reverses the selected arrival and departure values.
 */
const reversal = () => {
  const oldArrivalValue = selectedArrival.value;
  const oldDepartureValue = selectedDeparture.value;
  selectedDeparture.value = oldArrivalValue;
  selectedArrival.value = oldDepartureValue;
};

/**
 * Watches the departure and return dates for changes and updates their formatted values accordingly.
 * @param {Ref<Date>} departureDate - The departure date.
 * @param {Ref<Date>} returnDate - The return date.
 * @param {Ref<string>} formatDepartureDate - The formatted departure date.
 * @param {Ref<string>} formatReturnDate - The formatted return date.
 * @param {Ref<string>} locale - The locale used for formatting.
 */
watch(
  [departureDate, returnDate],
  ([newValueDepartureDate, newValueReturnDate]) => {
    formatDepartureDate.value =
      newValueDepartureDate && formatDate(newValueDepartureDate, locale.value);
    formatReturnDate.value =
      newValueReturnDate && formatDate(newValueReturnDate, locale.value);
  }
);
</script>

<template>
  <div class="mt-10 relative">
    <Card class="p-10 card">
      <CardContent class="space-y-7">
        <section class="flex flex-wrap gap-10">
          <RadioGroup default-value="one-way" class="flex gap-16">
            <div class="flex items-center">
              <RadioGroupItem
                id="one-way"
                value="one-way"
                class="text-blue-500 mx-2"
              />
              <Label for="one-way">{{ $t("One way") }}</Label>
            </div>
            <div class="flex items-center">
              <RadioGroupItem
                id="round-trip"
                value="round-trip"
                class="text-blue-500 mx-2"
              />
              <Label for="round-trip">{{ $t("Round trip") }}</Label>
            </div>
          </RadioGroup>
          <div class="flex items-center gap-4">
            <Label>{{ $t("Passengers") }}</Label>
            <Input type="number" class="h-8 w-16" min="1" default-value="1" />
          </div>
          <div class="flex items-center gap-4">
            <Label> {{ $t("Ticket class") }}</Label>
            <Select>
              <SelectTrigger class="w-[180px] pl-2">
                <SelectValue
                  :placeholder="$t('Please select class')"
                  class="p-0"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="economy"> {{ $t("Economy") }} </SelectItem>
                  <SelectItem value="business">
                    {{ $t("Business") }}
                  </SelectItem>
                  <SelectItem value="first"> {{ $t("First") }} </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
        <section class="flex flex-wrap gap-4">
          <div class="border-2 w-[200px]">
            <Label class="pl-3 text-gray-400 uppercase">{{ $t("From") }}</Label>
            <Select class="relative" v-model="selectedDeparture">
              <div class="wrapper" @click="reversal">
                <ArrowRightLeftIcon class="arrows" :size="16" />
              </div>
              <SelectTrigger class="border-0 w-fit">
                <SelectValue
                  :placeholder="$t('Choose Departure Destination:')"
                  class="p-0"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="departure in destinations"
                    :value="departure"
                  >
                    {{ $t(departure) }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="border-2 w-[200px]">
            <Label class="pl-3 text-gray-400 uppercase">{{ $t("To") }}</Label>
            <Select v-model="selectedArrival">
              <SelectTrigger class="w-fit border-0">
                <SelectValue
                  :placeholder="$t('Select Arrival Destination:')"
                  class="p-0"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="arrival in destinations" :value="arrival">
                    {{ $t(arrival) }}</SelectItem
                  >
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="border-2 flex flex-col p-1">
            <Label class="pl-4 text-gray-400 uppercase">{{
              $t("Departure")
            }}</Label>
            <Popover>
              <PopoverTrigger as-child class="w-[170px] border-0">
                <Button
                  :variant="'outline'"
                  :class="
                    cn(
                      ' justify-start text-left font-normal',
                      !departureDate && 'text-muted-foreground'
                    )
                  "
                >
                  <CalendarIcon class="mr-2 h-4 w-4" />
                  <span>{{
                    departureDate ? formatDepartureDate : $t("Pick a date")
                  }}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar :locale="locale" v-model="departureDate" />
              </PopoverContent>
            </Popover>
          </div>
          <div class="border-2 flex flex-col p-1">
            <Label class="pl-4 text-gray-400 uppercase">{{
              $t("Return")
            }}</Label>
            <Popover>
              <PopoverTrigger as-child class="w-[170px] border-0">
                <Button
                  :variant="'outline'"
                  :class="
                    cn(
                      ' justify-start text-left font-normal',
                      !returnDate && 'text-muted-foreground'
                    )
                  "
                >
                  <CalendarIcon class="mr-2 h-4 w-4" />
                  <span>{{
                    returnDate ? formatReturnDate : $t("Pick a date")
                  }}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar
                  :locale="locale"
                  v-model="returnDate"
                  :min-date="new Date()"
                  :disabled-dates="disabledDays"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button variant="default" class="w-fit py-8 px-4 bg-blue-400">
            <PlaneIcon :size="32" />
          </Button>
        </section>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  top: -8rem;
  right: 8rem;
  left: auto;
  border-radius: 18px;
  -webkit-box-shadow: 18px 22px 36px -32px rgba(0, 0, 0, 1);
  -moz-box-shadow: 18px 22px 36px -32px rgba(0, 0, 0, 1);
  box-shadow: 18px 22px 36px -32px rgba(0, 0, 0, 1);
}

.card:lang(en) {
  right: auto;
  left: 8rem;
}

.wrapper {
  cursor: pointer;
  position: absolute;
  right: 15.5rem;
  top: 8rem;
  background-color: rgb(142, 206, 245);
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
}

.wrapper:lang(en) {
  right: auto;
  left: 15.5rem;
}

@media only screen and (max-width: 1330px) {
  .card {
    position: relative;
    top: -2.5rem;
    right: auto;
    left: auto;
  }
  .card:lang(en) {
    right: auto;
    top: -2.5rem;
    left: auto;
    position: relative;
  }
}
@media only screen and (max-width: 760px) {
  .wrapper {
    display: none;
  }
  .wrapper:lang(en) {
    display: none;
  }
}
</style>
