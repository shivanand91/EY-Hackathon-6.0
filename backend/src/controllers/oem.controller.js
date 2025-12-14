import Diagnosis from "../models/Diagnosis.js";

export const getOEMInsights = async (req, res) => {
  try {
    const insights = await Diagnosis.aggregate([
      { $unwind: "$issues" },
      {
        $group: {
          _id: "$issues",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    return res.status(200).json({
      success: true,
      data: insights
    });
  } catch (error) {
    console.error("OEM Insights Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch OEM insights"
    });
  }
};
