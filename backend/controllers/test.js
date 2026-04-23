const {
  setBroker,
  listServices,
  verifyResult,
  InferenceRequest,
} = require('../controllers/InferenceController');

async function main() {
  try {
    await setBroker();
    const services = await listServices();
    console.log("Services:", services);

    const verification = await verifyResult();
    console.log("Verification:", verification);

    await InferenceRequest();
  } catch (err) {
    console.error("Execution failed:", err);
    process.exit(1);
  }
}
main();