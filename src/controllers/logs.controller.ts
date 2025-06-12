import { Request, Response } from "express";
import { fetchLogs } from "../services/logsApi"

//list logs

const listLogs = async (req: Request, res: Response): Promise<void> => {
  try {

    // Fetch logs from the external API

    const logs = await fetchLogs();
    res.status(200).json({ status: true, logs });

  } catch (error) {
    console.error("Error listing logs:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}


export { listLogs }