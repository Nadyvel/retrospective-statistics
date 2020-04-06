export interface Statistics {
    metadata: Metadata;
    created: PullRequestsCreated;
    merged: PullRequestsMerged;
}

export interface Metadata {
    repositorySlug: string;
    from: string;
    to: string;
}

export interface PullRequestsCreated {
    count: number;
    open: number;
    merged: number;
    declined: number;
}

export interface PullRequestsMerged {
    count: number;
    metrics: MetricsDetails;
    cycleTime: CycleTimeSummary;
    dueDate: DueDateSummary;
}

export interface MetricsDetails {
    changedFiles: number;
    commitCount: number;
    commentCount: number;
}

export interface CycleTimeSummary {
    averageInSeconds: number;
    thresholdInSeconds: number;
    total: number;
    aboveThreshold: number;
    belowThreshold: number;
}

export interface DueDateSummary {
    notSet: number;
    due: number;
    overdue: number;
}


export const statistics: Statistics = {
    metadata: {
        repositorySlug: "XYZ",
        from: "2020-01-01T23:00:00.000Z",
        to: "2020-01-15T22:59:59.000Z",
    },
    created: {
        count: 15,
        open: 1,
        merged: 13,
        declined: 1
    },
    merged: {
        count: 14,
        metrics: {
            commentCount: 2,
            changedFiles: 308,
            commitCount: 322
        },
        dueDate: {
            notSet: 12,
            due: 2,
            overdue: 0,
        },
        cycleTime: {
            averageInSeconds: 260287,
            thresholdInSeconds: 3600,
            total: 14,
            aboveThreshold: 10,
            belowThreshold: 4
        }
    }
}
