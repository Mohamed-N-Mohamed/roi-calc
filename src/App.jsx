import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';
import FormInput2 from './components/FormInput2';
import Results from './components/Results';
import StepWizard from 'react-step-wizard';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProgressBar from './components/ProgressBar';
import FormInput3 from './components/FormInput3';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [capitalCost, setCapitalCost] = useState('');

  const [farmerDetails, setFarmerDetails] = useState({
    fullName: '',
    address: '',
    email: '',
    farmType: '',
    phone: '',
  });

  const [requiredValues, setRequiredValues] = useState({
    herdSize: '',
    yieldOfCows: '',
    lagoonVolume: '',
    lagoonLength: '',
    lagoonWidth: '',
    lagoonDepth: '',
    lagoonType: '',
    timeHoused: 4,
    bundAngle: 30,
    yearlyElectricConsumption: '',
    yearlyDieselConsumption: '',
    tractorHoursPerYear: 0,
    numberOfTonnesNitrogenBasedFertiliser: '',
  });

  console.log(requiredValues);

  const [pageState, setPageState] = useState(0);

  //yearlyDieselConsumption && yearlyElectricConsumption && numberOfTonnesNitrogenBasedFertiliser are not stored in the state
  //Fix that !

  console.log(requiredValues);

  //required fixed values
  const BMP_Table = 'Table to side';
  const conversionRatioMethaneToGas = 0.6;
  const costPerGasCap = 4442.244;
  const skirtCost = 12.1;
  const gasProcessingSpeedGFS = 350400;
  const materialsWarrantyMarkUp = 1.1 * 1.25;
  const gasCostIncludingDeploymentGFS = 71540 * materialsWarrantyMarkUp + 860;
  const gasProcessingCapacityCFM = 350400;
  const staticCFMCost = 0;
  const mobileCFMCost = 0;
  const volumeOfGasBundles = 200;
  const fixedCFMGasUseYearly = 138478.08;
  const mobileCFMGasUseYearly = 103858.56;
  const rtfcPrice = 0.68;
  const rtfcSplitPercentage = 0.5;
  const assumedFertilizerPercentage = 0.21;
  const fertilizerCost = 400;
  const minimumHerdSize = 100;
  const averageRainfallValues = 0.85;
  const defaultBundAngle = 30;
  const oandmSplitPaidByFarmer = 0.5;
  const housedHoursPerDayTransitionaryPeriod = 14;
  const methaneLossToLeaks = 0.05;
  const methaneLossToSpreading = 0.15;
  const gasCapSurfaceArea = 79.21;
  const fixedBundleNumber = 5;
  const bundleCost = 6000 * materialsWarrantyMarkUp;

  const kwhPerKgMethane = 2.9;
  const electricGridPrice = 0.29;
  const biomethaneElectricPrice = 0.21;
  const dieselToKwhConversionFactor = 10.25;
  const dieselPrice = 1.58;
  const nitrogenPercentageInSlurry = 0.3;
  const methaneEquivalenceToCarbon = 84;
  const yearlyCFMMaintenanceCost = 0;
  const yearlyMobileCFMMaintenanceCost = 0;
  const yearlyGFSMaintenanceCost = 5824;
  const yearlyGasCapMaintenanceCost = 127.5;
  const yearlyTerrastoreMaintenanceCost = 0;
  const estimatedCarbonFootprintElectric = 0.162;
  const estimatedCarbonFootprintDiesel = 0.55;
  const skirtPercentageLagoonSurfaceArea = 0.75;
  const cylinderStorageCapacity = 200;
  const terrastoreStorageCapacity = 200;
  const terrastorePriceIncludingWarranty =
    6511.43 * materialsWarrantyMarkUp + 586.23;

  const pressureSensorPriceIncludingWarranty = 150 * materialsWarrantyMarkUp;
  const generatorPriceIncludingWarranty = 31240;
  const generatorOutputYearly = 110304;
  const markUpPercentage = 0.25;
  const kgNPerCowPerYear = 58;
  const assumedFertilizerUptakePercentage = 0.3;
  const powerRequiredForBiocycle = 1.04;
  const peakMonthsBiomethaneProductionPercentage = 0.14;
  const methanePercentageInBiogas = 0.6;
  const biocycleHourlyProcessingCapacity = 50;
  const terrastoreCapacity = 200;
  const biocycleHourlyOutput = 19;
  const percentageIncreaseForGeneratorPower = 1.14901399;
  const biomethaneRequiredPerTractorHour = 11;
  const cfmDieselMethaneUplife = 1.2;
  const redDieselPrice = 0.81;
  const bennamannPricePerKgMethaneForTractorFuel = 0;
  const mobileCFMMaxProcessingCapacityYearly = 262800;
  const methaneOutputToBiogasOutputRatio = 0.4;
  const yearlyOpsCostPerGasCap = 33.6;
  const yearlyOpsCostPerTerrastore = 0;
  const yearlyOpsPerGenerator = 1690;
  const annualGasProcessingCosts = 21222.5;

  //new required values
  const eaLicence = 1585;
  const annualGeneratorLeaseCost = 7601;
  const costOfWater = 1.93;
  const volumeOfSlurryTanker = 9;
  const labourCostPerHour = 25;
  const dieselFuelEconomy = 28;
  const adblueFuelEconomy = 2.8;
  const adblueCost = 0.4;
  const roundTripTimeForSpreading = 0.75;

  //Methane output
  const herdSize = +requiredValues.herdSize;
  console.log(herdSize);
  const maxMethanePotential1 = herdSize * 288.7337461; // change to it fixed number. in the excel it shows 144366.8731
  const maxMethanePotential = +maxMethanePotential1.toFixed(5);

  const percentageOfYearHoused = 7.75 / 12;
  const methaneAdjustedForTimeInShed1 =
    maxMethanePotential * percentageOfYearHoused;

  const methaneAdjustedForTimeInShed =
    +methaneAdjustedForTimeInShed1.toFixed(5);

  const methaneAdjustedForGasEscape1 =
    methaneAdjustedForTimeInShed * (1 - methaneLossToLeaks);

  const methaneAdjustedForGasEscape = +methaneAdjustedForGasEscape1.toFixed(5);

  const methaneAdjustedForGasLostToSpreading1 =
    methaneAdjustedForGasEscape * (1 - methaneLossToSpreading);

  const methaneAdjustedForGasLostToSpreading =
    +methaneAdjustedForGasLostToSpreading1.toFixed(5);

  const estimatedYearlyMethaneOutput1 = methaneAdjustedForGasEscape * 0.66;
  const estimatedYearlyMethaneOutput =
    +estimatedYearlyMethaneOutput1.toFixed(4);

  //Lagoon Information
  const lagoonType = requiredValues.lagoonType;
  const bundAngle = requiredValues.bundAngle;
  const lagoonVolume = requiredValues.lagoonVolume;
  const lagoonSurfaceArea =
    +requiredValues.lagoonLength * +requiredValues.lagoonWidth;

  //Savings
  const biogasToBeProcessed1 = methaneAdjustedForGasEscape / 0.66 / 0.6;

  const biogasToBeProcessed = +biogasToBeProcessed1.toFixed(4);

  const bioGasOutput =
    biogasToBeProcessed /
    (biocycleHourlyProcessingCapacity / biocycleHourlyOutput);

  const powerRequiredForBiocyle1 =
    estimatedYearlyMethaneOutput * powerRequiredForBiocycle;

  const powerRequiredForBiocyle = +powerRequiredForBiocyle1.toFixed(5);

  const methaneRequired1 = powerRequiredForBiocyle / kwhPerKgMethane;
  const methaneRequired = +methaneRequired1.toFixed(5);

  const methaneOutputInKWH1 = estimatedYearlyMethaneOutput * kwhPerKgMethane;
  const methaneOutputInKWH = +methaneOutputInKWH1.toFixed(4);

  const methanePostCFMKG1 = estimatedYearlyMethaneOutput - methaneRequired;
  const methanePostCFMKG = +methanePostCFMKG1.toFixed(5);

  const methanePostCFMKWH = methaneOutputInKWH - powerRequiredForBiocyle;

  const methaneKGRequiredToMeetElectricDemand1 =
    +requiredValues.yearlyElectricConsumption / kwhPerKgMethane;
  const methaneKGRequiredToMeetElectricDemand =
    +methaneKGRequiredToMeetElectricDemand1.toFixed(5);

  const methaneKGRequiredToMeetGenerator1 =
    methaneKGRequiredToMeetElectricDemand * percentageIncreaseForGeneratorPower;
  const methaneKGRequiredToMeetGenerator =
    +methaneKGRequiredToMeetGenerator1.toFixed(5);

  const methaneElectricGeneratedInKWH1 =
    methaneKGRequiredToMeetGenerator * kwhPerKgMethane;
  const methaneElectricGeneratedInKWH =
    +methaneElectricGeneratedInKWH1.toFixed(3);

  const electricSavings1 =
    methaneElectricGeneratedInKWH * electricGridPrice -
    methaneElectricGeneratedInKWH * biomethaneElectricPrice;
  const electricSavings = +electricSavings1.toFixed(5);

  const methaneRemainingAfterElectic =
    methanePostCFMKG - methaneKGRequiredToMeetGenerator > 0
      ? maxMethanePotential - methaneKGRequiredToMeetGenerator
      : 0;

  const methaneNeededForTractor =
    requiredValues.tractorHoursPerYear * biomethaneRequiredPerTractorHour;

  const methaneSavedForTractor =
    methaneRemainingAfterElectic > methaneNeededForTractor
      ? methaneNeededForTractor
      : methaneRemainingAfterElectic;

  const equivalnetKGPriceForFuel = cfmDieselMethaneUplife * redDieselPrice;
  const savingPerKG =
    equivalnetKGPriceForFuel - bennamannPricePerKgMethaneForTractorFuel;

  const dieselSavings = savingPerKG * methaneNeededForTractor;

  const methaneRemainingAfterDiesel =
    methaneRemainingAfterElectic - methaneNeededForTractor > 0
      ? methaneRemainingAfterElectic - methaneNeededForTractor
      : 0;

  const amountOfNitrogenInSlurry =
    ((requiredValues.herdSize * kgNPerCowPerYear) / 1000) *
    percentageOfYearHoused;

  const amountOfNitrogenInFertiliser =
    +requiredValues.numberOfTonnesNitrogenBasedFertiliser *
    assumedFertilizerPercentage;

  const tonnesOfNitrogenSaved =
    amountOfNitrogenInSlurry > amountOfNitrogenInFertiliser
      ? amountOfNitrogenInFertiliser
      : amountOfNitrogenInSlurry;

  const convertToTonnesOfFertiliserSaved =
    tonnesOfNitrogenSaved / assumedFertilizerPercentage;

  const maximumSavingsFromFertiliser1 =
    convertToTonnesOfFertiliserSaved * fertilizerCost;

  const maximumSavingsFromFertiliser =
    +maximumSavingsFromFertiliser1.toFixed(5);
  const assumedSavingsFromFertiliser1 =
    maximumSavingsFromFertiliser * assumedFertilizerUptakePercentage;
  const assumedSavingsFromFertiliser =
    +assumedSavingsFromFertiliser1.toFixed(6);

  const savedSpreadingHours =
    ((lagoonSurfaceArea * 0.85) / volumeOfSlurryTanker) *
    roundTripTimeForSpreading;
  const labourSavings = savedSpreadingHours * labourCostPerHour;
  const redDieselSaings1 =
    savedSpreadingHours * dieselFuelEconomy * redDieselPrice;
  const redDieselSaings = +redDieselSaings1.toFixed(1);
  const addBlueSavings = savedSpreadingHours * adblueFuelEconomy * adblueCost;
  const savingsFromSlurrySpreading =
    labourSavings + redDieselSaings + addBlueSavings;

  const savingsFromRainwaterHarvesting = costOfWater * 0.85 * lagoonSurfaceArea;

  //Total Savings
  // const totalSavings1 =assumedSavingsFromFertiliser + dieselSavings + electricSavings;
  // const totalSavings = +totalSavings1.toFixed(5);

  //new total savings
  const totalSavings1 =
    assumedSavingsFromFertiliser +
    dieselSavings +
    electricSavings +
    savedSpreadingHours +
    savingsFromRainwaterHarvesting;

  console.log(
    assumedSavingsFromFertiliser,
    dieselSavings,
    electricSavings,
    savedSpreadingHours,
    savingsFromRainwaterHarvesting
  );

  const totalSavings = +totalSavings1.toFixed(5);

  //Capital Cost
  const numberOfGFSNeeded = Math.ceil(
    methaneAdjustedForGasEscape / gasProcessingSpeedGFS
  );

  const gfsCost = numberOfGFSNeeded * gasCostIncludingDeploymentGFS;

  const cfmTypeNumberNeeded =
    biogasToBeProcessed > mobileCFMMaxProcessingCapacityYearly
      ? Math.ceil(biogasToBeProcessed / gasProcessingCapacityCFM)
      : 'Mobile';

  function roundUp(value) {
    return Math.ceil(value);
  }
  const cfmCost =
    typeof gfsCost === 'number' && !isNaN(gfsCost)
      ? gfsCost * staticCFMCost
      : methaneAdjustedForGasEscape;
  const numberOfGasCapsNeeded = roundUp(
    (lagoonSurfaceArea / gasCapSurfaceArea) * skirtPercentageLagoonSurfaceArea
  );

  const gasCapPriceIncludingSkirt = numberOfGasCapsNeeded * costPerGasCap;
  const numberOfBundlesNeeded = fixedBundleNumber;
  const BundleCost = bundleCost * fixedBundleNumber;
  const totalAnnualBiogasCaptured =
    estimatedYearlyMethaneOutput / methaneOutputToBiogasOutputRatio;

  const peakMonthProduction =
    totalAnnualBiogasCaptured * peakMonthsBiomethaneProductionPercentage;
  const peakWeekProduction = peakMonthProduction / 4;

  const peakHourlyProduction = peakWeekProduction / (24 * 7);
  const hoursOfMobileBiocyleNeededPerWeek = roundUp(
    peakWeekProduction / biocycleHourlyProcessingCapacity
  );
  const nonBiocyleHours = 24 * 7 - hoursOfMobileBiocyleNeededPerWeek;
  const gasProducedWhenBiocyleNotPresent =
    peakHourlyProduction * nonBiocyleHours;

  const terrastoresNeededForAny = roundUp(
    gasProducedWhenBiocyleNotPresent / terrastoreCapacity
  );
  const actualNumberOfTerrastoresNeeded =
    cfmTypeNumberNeeded === 'Mobile' ? terrastoresNeededForAny : 0;
  const terrastoresNeededNoBiocyle =
    cfmTypeNumberNeeded === 'Mobile'
      ? roundUp(peakWeekProduction / terrastoreCapacity)
      : 0;

  let terrastoreCost1 =
    actualNumberOfTerrastoresNeeded * terrastorePriceIncludingWarranty +
    (actualNumberOfTerrastoresNeeded > 0
      ? pressureSensorPriceIncludingWarranty
      : 0);

  terrastoreCost1 = terrastoreCost1.toFixed(4);
  const terrastoreCost = +terrastoreCost1;

  const numberOfGeneratorsNeeded = roundUp(
    requiredValues.yearlyElectricConsumption / generatorOutputYearly
  );

  const priceForGenerator =
    numberOfGeneratorsNeeded * generatorPriceIncludingWarranty;

  const estimatedCapitalCostBeforeMarkUp =
    terrastoreCost + BundleCost + gasCapPriceIncludingSkirt + cfmCost + gfsCost;

  let capitalClosedLoopCostWithMarkUp1 =
    estimatedCapitalCostBeforeMarkUp * (1 + markUpPercentage);
  capitalClosedLoopCostWithMarkUp1 =
    capitalClosedLoopCostWithMarkUp1.toFixed(4);
  const capitalClosedLoopCostWithMarkUp = +capitalClosedLoopCostWithMarkUp1;

  let capitalFitAndVentWithMarkUp1 =
    gasCapPriceIncludingSkirt * (1 + markUpPercentage);
  capitalFitAndVentWithMarkUp1 = capitalFitAndVentWithMarkUp1.toFixed(2);
  const capitalFitAndVentWithMarkUp = +capitalFitAndVentWithMarkUp1;

  //Income
  const fromElectricExport =
    methaneRemainingAfterDiesel * kwhPerKgMethane * electricGridPrice;
  const fromRRTFCs =
    estimatedYearlyMethaneOutput * rtfcPrice * rtfcSplitPercentage;
  const totalIncome = fromRRTFCs + fromElectricExport;

  //Carbon Offset
  const carbonOffsetFromElectricUsedOnFarm =
    methaneElectricGeneratedInKWH * estimatedCarbonFootprintElectric;
  const carboonOffsetFromElectricUsedByCFM =
    powerRequiredForBiocyle * estimatedCarbonFootprintElectric;
  const carbonOffsetFromElectricForGrid =
    methaneRemainingAfterElectic * estimatedCarbonFootprintElectric;
  const equivalentCarbonOffsetFromMethaneCaptured1 =
    methaneAdjustedForGasEscape * methaneEquivalenceToCarbon;
  const equivalentCarbonOffsetFromMethaneCaptured =
    +equivalentCarbonOffsetFromMethaneCaptured1.toFixed(3);
  const totalCarbonOffset1 =
    carbonOffsetFromElectricUsedOnFarm +
    carboonOffsetFromElectricUsedByCFM +
    carbonOffsetFromElectricForGrid +
    equivalentCarbonOffsetFromMethaneCaptured;
  const totalCarbonOffset = +totalCarbonOffset1.toFixed(3);

  //Yearly Operations Costs
  const fromCFM =
    typeof cfmTypeNumberNeeded === 'number'
      ? cfmTypeNumberNeeded * yearlyCFMMaintenanceCost
      : yearlyMobileCFMMaintenanceCost;

  const fromGFS = numberOfGFSNeeded * yearlyGFSMaintenanceCost;
  const fromGasCaps = numberOfGasCapsNeeded * yearlyOpsCostPerGasCap;
  const fromGenerator = numberOfGeneratorsNeeded * yearlyOpsPerGenerator;
  const fromTerrastores = terrastoresNeededForAny * yearlyOpsCostPerTerrastore;
  const gasProcessingCosts = annualGasProcessingCosts;

  //new yearly opertions costs
  const EALicence = eaLicence;
  const generatorLeaseCost =
    numberOfGeneratorsNeeded * annualGeneratorLeaseCost;

  // const totalYearCosts =
  //   (fromCFM +
  //     fromGFS +
  //     fromGasCaps +
  //     fromGenerator +
  //     fromTerrastores +
  //     gasProcessingCosts) *
  //   0.5;

  const totalYearCosts =
    (fromCFM +
      fromGFS +
      fromGasCaps +
      fromGenerator +
      fromTerrastores +
      gasProcessingCosts +
      EALicence) *
      oandmSplitPaidByFarmer +
    generatorLeaseCost;

  //Final Output closeed looop Capital Cost || CAPCH4 GAS
  const capitalCostCAPCH4GAS =
    estimatedCapitalCostBeforeMarkUp * (1 + markUpPercentage);

  //Net Revenue
  const netRevenue1 = totalIncome + totalSavings - totalYearCosts;

  console.log(totalIncome);
  const netRevenueCAPCH4GAS = +netRevenue1.toFixed(5);

  const yearlyCarbonOffsetCAPCH4GAS = totalCarbonOffset;

  //ROI Time
  const roiTimeCAPCH4GAS = capitalCostCAPCH4GAS / netRevenueCAPCH4GAS;

  //Saleable methane
  const SaleableMethane = methanePostCFMKG;

  //Final Outputs FIT & Vent || CAPCH4

  const capitalCostCAPCH4 = capitalFitAndVentWithMarkUp;
  const yearlyCarbonOffsetCAPCH4 = fromGenerator;

  const netRevenueCAPCH4 =
    assumedSavingsFromFertiliser +
    savingsFromRainwaterHarvesting +
    savingsFromSlurrySpreading -
    fromGasCaps;

  const roiTimeCAPCH4 = capitalCostCAPCH4 / netRevenueCAPCH4;

  //console.log(capitalCostCAPCH4, netRevenueCAPCH4, roiTimeCAPCH4);

  // set current step
  const OnStepChange = (step) => {
    setCurrentStep(step.activeStep);
  };

  //progress bar
  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />

        <StepWizard onStepChange={OnStepChange}>
          <FarmerInfo
            setFarmerDetails={setFarmerDetails}
            farmerDetails={farmerDetails}
            currentStep={currentStep}
            totalSteps={5}
          />
          <FormInputs
            requiredValues={requiredValues}
            setRequiredValues={setRequiredValues}
            currentStep={currentStep}
            totalSteps={5}
          />
          <FormInput3
            requiredValues={requiredValues}
            setRequiredValues={setRequiredValues}
            currentStep={currentStep}
            totalSteps={5}
          />
          <FormInput2
            requiredValues={requiredValues}
            setRequiredValues={setRequiredValues}
            currentStep={currentStep}
            totalSteps={5}
          />

          {pageState === 0 ? (
            <Results
              capitalCost={capitalCostCAPCH4GAS}
              netRevenue={netRevenueCAPCH4GAS}
              roiTime={roiTimeCAPCH4GAS}
              saleableMethane={SaleableMethane}
              setPageState={setPageState}
              pageState={pageState}
            />
          ) : (
            <Results
              capitalCost={capitalCostCAPCH4}
              netRevenue={netRevenueCAPCH4}
              roiTime={roiTimeCAPCH4}
              setPageState={setPageState}
              pageState={pageState}
            />
          )}
        </StepWizard>

        {/* <Results
          capitalCost={capitalCostCAPCH4}
          netRevenue={netRevenueCAPCH4}
          roiTime={roiTimeCAPCH4}
        /> */}
      </Container>
    </div>
  );
}

export default App;
