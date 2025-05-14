"use client";

import React, { useMemo } from "react";
import { useAllUsers } from "@/context/AllUsersContext";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import styles from "./MetricsDashboard.module.scss";

const MetricsDashboard = () => {
    const { users } = useAllUsers();

    const totalUsers = users.length;

    const recentUsers = useMemo(() => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return users.filter(user => new Date(user.createdAt) > oneWeekAgo).length;
    }, [users]);

    const userGrowthData = useMemo(() => {
        const groupedByDate = users.reduce<Record<string, number>>((acc, user) => {
            const date = new Date(user.createdAt).toLocaleDateString();
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(groupedByDate).map(([date, count]) => ({
            date,
            count,
        }));
    }, [users]);

    const roleDistributionData = useMemo(() => {
        const roleCounts = users.reduce<Record<string, number>>((acc, user) => {
            acc[user.role] = (acc[user.role] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(roleCounts).map(([role, count]) => ({
            role,
            count,
        }));
    }, [users]);

    const dailyUserData = useMemo(() => {
        const groupedByDay = users.reduce<Record<string, number>>((acc, user) => {
            const day = new Date(user.createdAt).toLocaleDateString();
            acc[day] = (acc[day] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(groupedByDay).map(([day, count]) => ({
            day,
            count,
        }));
    }, [users]);

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

    return (
        <div className={styles.metricsDashboard}>
            <div className={styles.cards}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h5">Total Users</Typography>
                        <Typography variant="h4">{totalUsers}</Typography>
                    </CardContent>
                </Card>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h5">Recently Added Users</Typography>
                        <Typography variant="h4">{recentUsers}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.chart}>
                <Typography variant="h5" gutterBottom>User Growth Over Time</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.chart}>
                <Typography variant="h5" gutterBottom>Role Distribution</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={roleDistributionData}
                            dataKey="count"
                            nameKey="role"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {roleDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.chart}>
                <Typography variant="h5" gutterBottom>Daily User Additions</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dailyUserData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MetricsDashboard;