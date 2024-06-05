import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';
import FormInput2 from './components/FormInput2';
import Results from './components/Results';
import StepWizard from 'react-step-wizard';
import { useState } from 'react';

function App() {
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
    yearlyElectricConsumption: 96000,
    tractorHoursPerYear: 1000,
    numberOfTonnesNitrogenBasedFertiliser: 500,
  });

  //required fixed values
  const BMP_Table = 'Table to side';
  const conversionRatioMethaneToGas = 0.6;
  const costPerGasCap = 4442.244;
  const skirtCost = 12.1;
  const gasProcessingSpeedGFS = 350400;
  const gasCostIncludingDeploymentGFS = 79554;
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
  const bundleCost = 5500;
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
  const terrastorePriceIncludingWarranty = 7748.803;
  const pressureSensorPriceIncludingWarranty = 165;
  const generatorPriceIncludingWarranty = 31240;
  const generatorOutputYearly = 110304;
  const markUpPercentage = 0.15;
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
  const materialsWarrantyMarkUp = 1.1;
  const yearlyOpsCostPerGasCap = 33.6;
  const yearlyOpsCostPerTerrastore = 0;
  const yearlyOpsPerGenerator = 1690;
  const annualGasProcessingCosts = 21222.5;

  //Methane output
  const herdSize = +requiredValues.herdSize;
  const maxMethanePotential1 = herdSize * 288.7337461; // change to it fixed number. in the excel it shows 144366.8731
  const maxMethanePotential = +maxMethanePotential1.toFixed(5);

  const percentageOfYearHoused = 0.646;
  const methaneAdjustedForTimeInShed1 =
    maxMethanePotential * percentageOfYearHoused;
  const methaneAdjustedForTimeInShed =
    +methaneAdjustedForTimeInShed1.toFixed(1);

  const methaneAdjustedForGasEscape =
    methaneAdjustedForTimeInShed * (1 - methaneLossToLeaks);

  const methaneAdjustedForGasLostToSpreading1 =
    methaneAdjustedForGasEscape * (1 - methaneLossToSpreading);

  const methaneAdjustedForGasLostToSpreading =
    +methaneAdjustedForGasLostToSpreading1.toFixed(4);

  const estimatedYearlyMethaneOutput = methaneAdjustedForGasEscape * 0.66;

  //Lagoon Information
  const lagoonType = requiredValues.lagoonType;
  const bundAngle = requiredValues.bundAngle;
  const lagoonVolume = requiredValues.lagoonVolume;
  const lagoonSurfaceArea =
    requiredValues.lagoonLength * requiredValues.lagoonWidth;

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
    requiredValues.yearlyElectricConsumption / kwhPerKgMethane;
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
    requiredValues.numberOfTonnesNitrogenBasedFertiliser *
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

  //Total Savings
  const totalSavings1 =
    assumedSavingsFromFertiliser + dieselSavings + electricSavings;
  const totalSavings = +totalSavings1.toFixed(5);

  //TODO work on capital costs

  //Capital Cost
  const numberOfGFSNeeded = Math.ceil(75308.2575 / gasProcessingSpeedGFS);

  const gfsCost = numberOfGFSNeeded * gasCostIncludingDeploymentGFS;
  const cfmTypeNumberNeeded =
    biogasToBeProcessed > mobileCFMMaxProcessingCapacityYearly
      ? Math.ceil(biogasToBeProcessed / gasProcessingCapacityCFM)
      : 'Mobile';


      function roundUp(value) {
        return Math.ceil(value);
    }
  const cfmCost = typeof gfsCost === 'number' && !isNaN(gfsCost) ? gfsCost * staticCFMCost : methaneAdjustedForGasEscape
  const numberOfGasCapsNeeded = roundUp((lagoonSurfaceArea / gasCapSurfaceArea) * skirtPercentageLagoonSurfaceArea)
  const gasCapPriceIncludingSkirt = numberOfGasCapsNeeded * costPerGasCap
  const numberOfBundlesNeeded = fixedBundleNumber
  const BundleCost = bundleCost * fixedBundleNumber
  const totalAnnualBiogasCaptured = estimatedYearlyMethaneOutput / methaneOutputToBiogasOutputRatio
  const peakMonthProduction = totalAnnualBiogasCaptured * peakMonthsBiomethaneProductionPercentage
  const peakWeekProduction = peakMonthProduction / 4
  const peakHourlyProduction = peakWeekProduction / (24 * 7)
  const hoursOfMobileBiocyleNeededPerWeek = roundUp(peakWeekProduction / biocycleHourlyProcessingCapacity)
  const nonBiocyleHours = 24 * 7 - hoursOfMobileBiocyleNeededPerWeek
  const gasProducedWhenBiocyleNotPresent = peakHourlyProduction * nonBiocyleHours
  const terrastoresNeededForAny =  roundUp(gasProducedWhenBiocyleNotPresent / terrastoreCapacity)
  const actualNumberOfTerrastoresNeeded = cfmTypeNumberNeeded === 'Mobile'? terrastoresNeededForAny : 0
  const terrastoresNeededNoBiocyle = (cfmTypeNumberNeeded === 'Mobile') ? roundUp(peakWeekProduction / terrastoreCapacity) : 0
  const terrastoreCost = actualNumberOfTerrastoresNeeded * terrastorePriceIncludingWarranty + (actualNumberOfTerrastoresNeeded > 0 ? pressureSensorPriceIncludingWarranty : 0)
  const numberOfGeneratorsNeeded = roundUp(requiredValues.yearlyElectricConsumption / generatorOutputYearly)
  const priceForGenerator = numberOfGeneratorsNeeded * generatorPriceIncludingWarranty
  const estimatedCapitalCostBeforeMarkUp = terrastoreCost + priceForGenerator + BundleCost + gasCapPriceIncludingSkirt + cfmCost + gfsCost
  const capitalCostWithMarkUp  = estimatedCapitalCostBeforeMarkUp * (1 + markUpPercentage)

  console.log(capitalCostWithMarkUp);

  //Income
  const electricExport = 0;

  //Net revenue = Add savings and income and subtract yearly operations cost

  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        <StepWizard>
          {/* <FarmerInfo
            setFarmerDetails={setFarmerDetails}
            farmerDetails={farmerDetails}
          /> */}
          <FormInputs
            requiredValues={requiredValues}
            setRequiredValues={setRequiredValues}
          />
          <FormInput2 />
          <Results />
        </StepWizard>
      </Container>
    </div>
  );
}

export default App;
